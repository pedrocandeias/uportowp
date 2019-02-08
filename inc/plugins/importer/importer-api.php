<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Porto_Importer_API {

	protected $demo = '';
	protected $code = '';

	protected $path_tmp  = '';
	protected $path_demo = '';

	protected $url = array(
		'theme_version'   => '1.0',
		'theme'           => 'https://github.com/pedrocandeias/uportowp',
		'plugins_version' => '',
		'plugins'         => '',
	);

	public function __construct( $demo = false ) {
		if ( $demo ) {
			$this->demo     = $demo;
			$upload_dir     = wp_upload_dir();
			$this->path_tmp = wp_normalize_path( $upload_dir['basedir'] . '/porto_tmp_dir' );
			$this->makedir();
		}
	}

	public function get_url( $id ) {
		return isset( $this->url[ $id ] ) ? $this->url[ $id ] : false;
	}

	/**
	 * Create directories
	 */
	protected function makedir() {

		if ( ! file_exists( $this->path_tmp ) ) {
			wp_mkdir_p( $this->path_tmp );
		}

		$this->path_demo = wp_normalize_path( $this->path_tmp . '/' . $this->demo );
		if ( ! file_exists( $this->path_demo ) ) {
			wp_mkdir_p( $this->path_demo );
		}
	}

	/**
	 * Delete temporary directory
	 */
	public function delete_temp_dir() {

		// filesystem
		global $wp_filesystem;
		// Initialize the WordPress filesystem, no more using file_put_contents function
		if ( empty( $wp_filesystem ) ) {
			require_once( ABSPATH . '/wp-admin/includes/file.php' );
			WP_Filesystem();
		}

		// directory is located outside wp uploads dir
		$upload_dir = wp_upload_dir();
		if ( false === strpos( str_replace( '\\', '/', $this->path_demo ), str_replace( '\\', '/', $upload_dir['basedir'] ) ) ) {
			return false;
		}

		$wp_filesystem->delete( $this->path_demo, true );
	}

	/**
	 * Get response
	 */
	public function get_response( $target, $args = array(), $data_type = 'json' ) {

		$defaults = array(
			'user-agent' => 'WordPress/' . get_bloginfo( 'version' ) . '; ' . network_site_url(),
			'timeout'    => 30,
		);
		$args     = wp_parse_args( $args, $defaults );

		$url = $this->get_url( $target );
		if ( ! $url ) {
			$url = $target;
		}
		$response = wp_remote_get( $url, $args );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$response = wp_remote_retrieve_body( $response );
		if ( 'json' == $data_type ) {
			$data = json_decode( $response, true );

			if ( isset( $data['error'] ) ) {
				return new WP_Error( 'invalid_response', $data['error'] );
			}

			return $data;
		}

		return $response;
	}

	public function generate_args( $ish = true ) {
		preg_match( '/[a-z0-9\-]{1,63}\.[a-z\.]{2,6}$/', parse_url( site_url(), PHP_URL_HOST ), $_domain_tld );
		if ( isset( $_domain_tld[0] ) ) {
			$domain = $_domain_tld[0];
		} else {
			$domain = parse_url( site_url(), PHP_URL_HOST );
		}
		$args      = array(
			'code'   => $this->code,
			'domain' => $domain,
		);
		$whitelist = array(
			'127.0.0.1',
			'::1',
		);
		if ( in_array( $_SERVER['REMOTE_ADDR'], $whitelist ) ) {
			$args['local'] = 'true';
		}
		return $args;
	}


	/**
	 * Get remote theme version
	 */
	public function get_latest_theme_version() {
		$response = $this->get_response( 'theme_version' );
		if ( is_wp_error( $response ) ) {
			return false;
		}
		if ( empty( $response['version'] ) ) {
			return false;
		}
		return $response['version'];
	}
}
