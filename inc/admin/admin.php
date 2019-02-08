<?php

/**
 * Porto Admin Class
 */
defined( 'ABSPATH' ) || exit;

class Porto_Admin {

	public function __construct() {
		add_action( 'wp_before_admin_bar_render', array( $this, 'add_wp_toolbar_menu' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'after_switch_theme', array( $this, 'after_switch_theme' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_theme_update_url' ), 1001 );

		if ( is_admin() ) {
			add_filter( 'pre_set_site_transient_update_themes', array( $this, 'pre_set_site_transient_update_themes' ) );
			add_action( 'wp_ajax_porto_switch_theme_options_panel', array( $this, 'switch_options_panel' ) );
			add_action( 'wp_ajax_nopriv_porto_switch_theme_options_panel', array( $this, 'switch_options_panel' ) );
		}
	}

	public function switch_options_panel() {
		if ( isset( $_POST['type'] ) && 'redux' == $_POST['type'] ) {
			set_theme_mod( 'theme_options_use_new_style', false );
		} else {
			set_theme_mod( 'theme_options_use_new_style', true );
		}
	}

	public function add_wp_toolbar_menu() {
		if ( current_user_can( 'edit_theme_options' ) ) {
			$porto_parent_menu_title = '<span class="ab-icon"></span><span class="ab-label">U.Porto WP</span>';
			$this->add_wp_toolbar_menu_item( $porto_parent_menu_title, false, admin_url( 'admin.php?page=porto' ), array( 'class' => 'porto-menu' ), 'porto' );
			if ( get_theme_mod( 'theme_options_use_new_style', false ) ) {
				$this->add_wp_toolbar_menu_item( __( 'Theme Options', 'porto' ), 'porto', admin_url( 'customize.php' ) );
				$this->add_wp_toolbar_menu_item( __( 'Advanced Options', 'porto' ), 'porto', admin_url( 'themes.php?page=porto_settings' ) );
			} else {
				$this->add_wp_toolbar_menu_item( __( 'Theme Options', 'porto' ), 'porto', admin_url( 'themes.php?page=porto_settings' ) );
			}
			$this->add_wp_toolbar_menu_item( __( 'Setup Wizard', 'porto' ), 'porto', admin_url( 'admin.php?page=porto-setup-wizard' ) );
			$this->add_wp_toolbar_menu_item( __( 'Speed Optimize Wizard', 'porto' ), 'porto', admin_url( 'admin.php?page=porto-speed-optimize-wizard' ) );
		}
	}

	public function add_wp_toolbar_menu_item( $title, $parent = false, $href = '', $custom_meta = array(), $custom_id = '' ) {
		global $wp_admin_bar;
		if ( current_user_can( 'edit_theme_options' ) ) {
			if ( ! is_super_admin() || ! is_admin_bar_showing() ) {
				return;
			}
			// Set custom ID
			if ( $custom_id ) {
				$id = $custom_id;
			} else { // Generate ID based on $title
				$id = strtolower( str_replace( ' ', '-', $title ) );
			}
			// links from the current host will open in the current window
			$meta = strpos( $href, site_url() ) !== false ? array() : array( 'target' => '_blank' ); // external links open in new tab/window

			$meta = array_merge( $meta, $custom_meta );
			$wp_admin_bar->add_node(
				array(
					'parent' => $parent,
					'id'     => $id,
					'title'  => $title,
					'href'   => $href,
					'meta'   => $meta,
				)
			);
		}
	}

	public function admin_menu() {
		if ( is_admin() && current_user_can( 'edit_theme_options' ) ) {
			$welcome_screen = add_menu_page( 'Porto', 'U.Porto WP', 'administrator', 'porto', array( $this, 'welcome_screen' ), 'dashicons-porto-logo', 59 );
			if ( get_theme_mod( 'theme_options_use_new_style', false ) ) {
				$theme_options = add_submenu_page( 'porto', __( 'Theme Options', 'porto' ), __( 'Theme Options', 'porto' ), 'administrator', 'customize.php' );
				$theme_options = add_submenu_page( 'porto', __( 'Advanced Options', 'porto' ), __( 'Advanced Options', 'porto' ), 'administrator', 'themes.php?page=porto_settings' );
			} else {
				$theme_options = add_submenu_page( 'porto', __( 'Theme Options', 'porto' ), __( 'Theme Options', 'porto' ), 'administrator', 'themes.php?page=porto_settings' );
			}
		}
	}

	public function welcome_screen() {
		require_once porto_admin . '/admin_pages/welcome.php';
	}

	public function let_to_num( $size ) {
		$l   = substr( $size, -1 );
		$ret = substr( $size, 0, -1 );
		switch ( strtoupper( $l ) ) {
			case 'P':
				$ret *= 1024;
			case 'T':
				$ret *= 1024;
			case 'G':
				$ret *= 1024;
			case 'M':
				$ret *= 1024;
			case 'K':
				$ret *= 1024;
		}
		return $ret;
	}

	public function pre_set_site_transient_update_themes( $transient ) {
		if ( empty( $transient->checked ) ) {
			return $transient;
		}

		require_once porto_plugins . '/importer/importer-api.php';
		$importer_api   = new Porto_Importer_API();
		$new_version    = $importer_api->get_latest_theme_version();
		$theme_template = get_template();
		if ( version_compare( wp_get_theme( $theme_template )->get( 'Version' ), $new_version, '<' ) ) {

			$args = $importer_api->generate_args( false );
			$transient->response[ $theme_template ] = array(
				'theme'       => $theme_template,
				'new_version' => $new_version,
				'package'     => add_query_arg( $args, $importer_api->get_url( 'theme' ) ),
			);

		}
		return $transient;
	}

	public function add_theme_update_url() {
		global $pagenow;
		if ( 'update-core.php' == $pagenow ) {
			require_once porto_plugins . '/importer/importer-api.php';
			$importer_api   = new Porto_Importer_API();
			$new_version    = $importer_api->get_latest_theme_version();
			$theme_template = get_template();
			if ( version_compare( porto_version, $new_version, '<' ) ) {
				$checkbox_id = md5( wp_get_theme( $theme_template )->get( 'Name' ) );
				wp_add_inline_script( 'porto-admin', 'if (jQuery(\'#checkbox_' . $checkbox_id . '\').length) {jQuery(\'#checkbox_' . $checkbox_id . '\').closest(\'tr\').children().last().append(\'<a href="' . esc_url( $url ) . '" target="_blank">' . esc_html__( 'View Details', 'porto' ) . '</a>\');}' );
			}
		}
	}

	public function after_switch_theme() {
			$this->refresh_transients();
	}

	public function refresh_transients() {
		delete_site_transient( 'porto_plugins' );
		delete_site_transient( 'update_themes' );
		unset( $_COOKIE['porto_dismiss_activate_msg'] );
		setcookie( 'porto_dismiss_activate_msg', null, -1, '/' );
	}
}

$GLOBALS['porto_admin'] = new Porto_Admin();
function Porto() {
	global $porto_admin;
	if ( ! $porto_admin ) {
		$porto_admin = new Porto_Admin();
	}
	return $porto_admin;
}

if ( is_customize_preview() ) {
	require porto_admin . '/customizer/customizer.php';

	require porto_admin . '/customizer/header-builder.php';

	if ( get_theme_mod( 'theme_options_use_new_style', false ) ) {
		require porto_admin . '/customizer/selective-refresh.php';
		require porto_admin . '/customizer/customizer-reset.php';
	}
}

add_action( 'admin_init', 'porto_compile_css_on_activation' );
function porto_compile_css_on_activation() {
	if ( ! get_option( 'porto_bootstrap_style' ) ) {
		porto_compile_css( 'bootstrap' );
	}
	if ( ! get_option( 'porto_dynamic_style' ) && ( false === get_transient( 'porto_dynamic_style_time' ) ) ) {
		porto_save_theme_settings();
	}
}

if ( is_admin() ) {
	add_action(
		'admin_init',
		function() {
			if ( isset( $_POST['porto_registration'] ) && check_admin_referer( 'porto-setup' ) ) {
				$action = isset( $_POST['action'] ) ? $_POST['action'] : '';
				update_option( 'porto_register_error_msg', '' );
				$result = Porto()->check_purchase_code();
				if ( 'verified' === $result ) {
					update_option( 'porto_registered', true );
					Porto()->refresh_transients();
				} elseif ( 'unregister' === $result ) {
					update_option( 'porto_registered', false );
					Porto()->refresh_transients();
				} elseif ( 'invalid' === $result ) {
					update_option( 'porto_registered', false );
					update_option( 'porto_register_error_msg', __( 'Sorry, it could not connect to the Porto API server. Please try again later.', 'porto' ) );
				} else {
					update_option( 'porto_registered', false );
					update_option( 'porto_register_error_msg', $result );
				}
			}
		}
	);

	remove_action( 'vc_activation_hook', 'vc_page_welcome_set_redirect' );
	remove_action( 'admin_init', 'vc_page_welcome_redirect' );

	// Add Advanced Options
	if ( ! is_customize_preview() ) {
		require porto_admin . '/setup_wizard/setup_wizard.php';
		require porto_admin . '/setup_wizard/speed_optimize_wizard.php';
	}
}
