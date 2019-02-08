<?php
/**
 * Porto Theme Setup Wizard Class
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Porto_Theme_Setup_Wizard' ) ) {
	/**
	 * Porto_Theme_Setup_Wizard class
	 */
	class Porto_Theme_Setup_Wizard {

		protected $version = '1.2';

		protected $theme_name = '';

		protected $step = '';

		protected $steps = array();

		public $page_slug;

		protected $tgmpa_instance;

		protected $tgmpa_menu_slug = 'tgmpa-install-plugins';

		protected $tgmpa_url = 'themes.php?page=tgmpa-install-plugins';

		protected $page_url;

		protected $porto_url = 'https://www.portotheme.com/wordpress/porto/';

		private static $instance = null;

		public static function get_instance() {
			if ( ! self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		private function porto_demo_filters() {
			return array(
				'all'       => 'Show All',
				'onepage'   => 'One Page',
				'business'  => 'Business',
				'portfolio' => 'Portfolio',
				'classic'   => 'Classic',
			);
		}

		public function __construct() {
			$this->init_globals();
			$this->init_actions();
		}

		public function get_header_logo_width() {
			return '200px';
		}

		public function init_globals() {
			$current_theme    = wp_get_theme();
			$this->theme_name = strtolower( preg_replace( '#[^a-zA-Z]#', '', $current_theme->get( 'Name' ) ) );
			$this->page_slug  = 'porto-setup-wizard';
			$this->page_url   = 'admin.php?page=' . $this->page_slug;
		}

		public function init_actions() {
			if ( apply_filters( $this->theme_name . '_enable_setup_wizard', true ) && current_user_can( 'manage_options' ) ) {

				if ( class_exists( 'TGM_Plugin_Activation' ) && isset( $GLOBALS['tgmpa'] ) ) {
					add_action( 'init', array( $this, 'get_tgmpa_instanse' ), 30 );
					add_action( 'init', array( $this, 'set_tgmpa_url' ), 40 );
				}

				add_action( 'admin_menu', array( $this, 'admin_menus' ) );
				add_action( 'admin_init', array( $this, 'admin_redirects' ), 30 );

				add_action( 'admin_init', array( $this, 'init_wizard_steps' ), 30 );
				add_action( 'admin_init', array( $this, 'setup_wizard' ), 30 );
				add_filter( 'tgmpa_load', array( $this, 'tgmpa_load' ), 10, 1 );
				add_action( 'wp_ajax_porto_setup_wizard_plugins', array( $this, 'ajax_plugins' ) );

				if ( isset( $_GET['page'] ) && $this->page_slug === $_GET['page'] ) {
					add_filter( 'wp_title', array( $this, 'page_title' ) );
				}
			}

			add_action( 'upgrader_post_install', array( $this, 'upgrader_post_install' ), 10, 2 );
		}

		public function page_title() {
			return esc_html__( 'Theme &rsaquo; Setup Wizard', 'porto' );
		}

		public function upgrader_post_install( $return, $theme ) {
			if ( is_wp_error( $return ) ) {
				return $return;
			}
			if ( get_stylesheet() != $theme ) {
				return $return;
			}
			update_option( 'porto_setup_complete', false );

			return $return;
		}

		public function tgmpa_load( $status ) {
			return is_admin() || current_user_can( 'install_themes' );
		}

		public function switch_theme() {
			set_transient( '_' . $this->theme_name . '_activation_redirect', 1 );
		}

		public function admin_redirects() {
			ob_start();

			if ( ! get_transient( '_' . $this->theme_name . '_activation_redirect' ) || get_option( 'porto_setup_complete', false ) ) {
				return;
			}
			delete_transient( '_' . $this->theme_name . '_activation_redirect' );
			wp_safe_redirect( admin_url( $this->page_url ) );
			exit;
		}

		public function get_tgmpa_instanse() {
			$this->tgmpa_instance = call_user_func( array( get_class( $GLOBALS['tgmpa'] ), 'get_instance' ) );
		}

		public function set_tgmpa_url() {

			$this->tgmpa_menu_slug = ( property_exists( $this->tgmpa_instance, 'menu' ) ) ? $this->tgmpa_instance->menu : $this->tgmpa_menu_slug;
			$this->tgmpa_menu_slug = apply_filters( $this->theme_name . '_theme_setup_wizard_tgmpa_menu_slug', $this->tgmpa_menu_slug );

			$tgmpa_parent_slug = ( property_exists( $this->tgmpa_instance, 'parent_slug' ) && 'themes.php' !== $this->tgmpa_instance->parent_slug ) ? 'admin.php' : 'themes.php';

			$this->tgmpa_url = apply_filters( $this->theme_name . '_theme_setup_wizard_tgmpa_url', $tgmpa_parent_slug . '?page=' . $this->tgmpa_menu_slug );

		}

		public function admin_menus() {
			add_submenu_page( 'porto', esc_html__( 'Setup Wizard', 'porto' ), esc_html__( 'Setup Wizard', 'porto' ), 'manage_options', $this->page_slug, array( $this, $this->page_slug ) );
		}

		public function init_wizard_steps() {

			$this->steps = array(
				'introduction' => array(
					'name'    => esc_html__( 'Welcome', 'porto' ),
					'view'    => array( $this, 'porto_setup_wizard_welcome' ),
					'handler' => array( $this, 'porto_setup_wizard_welcome_save' ),
				),
			);

			$this->steps['status'] = array(
				'name'    => esc_html__( 'Status', 'porto' ),
				'view'    => array( $this, 'porto_setup_wizard_status' ),
				'handler' => array( $this, 'porto_setup_wizard_status_save' ),
			);

			if ( class_exists( 'TGM_Plugin_Activation' ) && isset( $GLOBALS['tgmpa'] ) ) {
				$this->steps['default_plugins'] = array(
					'name'    => esc_html__( 'Plugins', 'porto' ),
					'view'    => array( $this, 'porto_setup_wizard_default_plugins' ),
					'handler' => '',
				);
			}
			$this->steps['next_steps']   = array(
				'name'    => esc_html__( 'Ready!', 'porto' ),
				'view'    => array( $this, 'porto_setup_wizard_ready' ),
				'handler' => '',
			);

			$this->steps = apply_filters( $this->theme_name . '_theme_setup_wizard_steps', $this->steps );
		}

		/**
		 * Display the setup wizard
		 */
		public function setup_wizard() {
			if ( empty( $_GET['page'] ) || $this->page_slug !== $_GET['page'] ) {
				return;
			}
			ob_end_clean();

			$this->step = isset( $_GET['step'] ) ? sanitize_key( $_GET['step'] ) : current( array_keys( $this->steps ) );

			wp_register_script( 'jquery-blockui', porto_uri . '/inc/admin/setup_wizard/assets/js/jquery.blockUI.js', array( 'jquery' ), '2.70', true );
			wp_register_script( 'isotope', porto_js . '/libs/isotope.pkgd.min.js', array( 'jquery' ), '3.0.1', true );
			wp_register_script( 'jquery-magnific-popup', porto_js . '/libs/jquery.magnific-popup.min.js', array( 'jquery' ), '1.1.0', true );
			wp_register_script( 'porto-admin', porto_js . '/admin/admin.min.js', array( 'jquery', 'jquery-magnific-popup' ), $this->version, true );
			wp_register_script( 'porto-setup', porto_uri . '/inc/admin/setup_wizard/assets/js/setup-wizard.js', array( 'jquery', 'isotope', 'porto-admin', 'jquery-blockui' ), $this->version );
			wp_localize_script(
				'porto-setup',
				'porto_setup_wizard_params',
				array(
					'tgm_plugin_nonce' => array(
						'update'  => wp_create_nonce( 'tgmpa-update' ),
						'install' => wp_create_nonce( 'tgmpa-install' ),
					),
					'tgm_bulk_url'     => esc_url( admin_url( $this->tgmpa_url ) ),
					'wpnonce'          => wp_create_nonce( 'porto_setup_wizard_nonce' ),
				)
			);

			wp_enqueue_style( 'porto-magnific-popup', porto_css . '/magnific-popup.min.css', false, $this->version, 'all' );
			wp_enqueue_style( 'porto-setup', porto_uri . '/inc/admin/setup_wizard/assets/css/style.css', array( 'wp-admin', 'dashicons', 'install', 'porto-magnific-popup' ), $this->version );

			wp_enqueue_style( 'wp-admin' );
			wp_enqueue_media();
			wp_enqueue_script( 'media' );

			ob_start();
			$this->setup_wizard_header();
			$this->setup_wizard_steps();
			$show_content = true;
			echo '<div class="porto-setup-content">';
			if ( ! empty( $_REQUEST['save_step'] ) && isset( $this->steps[ $this->step ]['handler'] ) ) {
				$show_content = call_user_func( $this->steps[ $this->step ]['handler'] );
			}
			if ( $show_content ) {
				$this->setup_wizard_content();
			}
			echo '</div>';
			$this->setup_wizard_footer();
			exit;
		}

		public function get_step_link( $step ) {
			return add_query_arg( 'step', $step, admin_url( 'admin.php?page=' . $this->page_slug ) );
		}
		public function get_next_step_link() {
			$keys = array_keys( $this->steps );
			return add_query_arg( 'step', $keys[ array_search( $this->step, array_keys( $this->steps ) ) + 1 ], remove_query_arg( 'translation_updated' ) );
		}

		/**
		 * Setup Wizard Header
		 */
		public function setup_wizard_header() {
			?>
			<!DOCTYPE html>
			<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
			<head>
				<meta name="viewport" content="width=device-width" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title><?php wp_title(); ?></title>
				<script type="text/javascript">
					var ajaxurl = '<?php echo esc_url( admin_url( 'admin-ajax.php', 'relative' ) ); ?>';
				</script>
				<?php wp_print_scripts( 'porto-setup' ); ?>
				<?php do_action( 'admin_print_styles' ); ?>
				<?php do_action( 'admin_print_scripts' ); ?>
			</head>
			<body class="porto-setup wp-core-ui">
			<h1 id="porto-logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?> - <?php bloginfo( 'description' ); ?>" class="overlay-logo">
					<img class="img-responsive" src="<?php echo porto_uri; ?>/images/logo/logo.png" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" width="111" height="54" />
				</a>
			</h1>
			<?php
		}

		/**
		 * Setup Wizard Footer
		 */
		public function setup_wizard_footer() {
			?>
			<a class="wc-return-to-dashboard" href="<?php echo esc_url( admin_url() ); ?>"><?php esc_html_e( 'Return to the WordPress Dashboard', 'porto' ); ?></a>
			<?php
			@do_action( 'admin_footer' );
			do_action( 'admin_print_footer_scripts' );
			?>
			</body>
			</html>
			<?php
		}

		/**
		 * Output the steps
		 */
		public function setup_wizard_steps() {
			$ouput_steps = $this->steps;
			array_shift( $ouput_steps );
			?>
			<ol class="porto-setup-steps">
			<?php foreach ( $ouput_steps as $step_key => $step ) : ?>
				<?php
				$show_link        = true;
				$li_class_escaped = '';
				if ( $step_key === $this->step ) {
					$li_class_escaped = 'active';
				} elseif ( array_search( $this->step, array_keys( $this->steps ) ) > array_search( $step_key, array_keys( $this->steps ) ) ) {
					$li_class_escaped = 'done';
				}
				if ( $step_key === $this->step || 'next_steps' == $step_key ) {
					$show_link = false;
				}
				?>
				<li class="<?php echo $li_class_escaped; ?>">
				<?php
				if ( $show_link ) {
					?>
						<a href="<?php echo esc_url( $this->get_step_link( $step_key ) ); ?>"><?php echo esc_html( $step['name'] ); ?></a>
						<?php
				} else {
					echo esc_html( $step['name'] );
				}
				?>
					</li>
			<?php endforeach; ?>
			</ol>
			<?php
		}

		/**
		 * Output the content for the current step
		 */
		public function setup_wizard_content() {
			isset( $this->steps[ $this->step ] ) ? call_user_func( $this->steps[ $this->step ]['view'] ) : false;
		}

		/**
		 * Welcome step
		 */
		public function porto_setup_wizard_welcome() {
			if ( get_option( 'porto_setup_complete', false ) ) {
				?>
				<?php /* translators: %s: Theme name */ ?>
				<h1><?php printf( esc_html__( 'Welcome to the setup wizard for %s.', 'porto' ), wp_get_theme() ); ?></h1>
				<p class="lead success"><?php esc_html_e( 'It looks like you already have setup Porto.', 'porto' ); ?></p>

				<p class="porto-setup-actions step">
					<a href="<?php echo esc_url( $this->get_next_step_link() ); ?>" class="button-primary button button-next button-large"><?php esc_html_e( 'Run Setup Wizard Again', 'porto' ); ?></a>
					<a href="<?php echo esc_url( admin_url( 'admin.php?page=porto' ) ); ?>" class="button button-large"><?php esc_html_e( 'Exit to Porto Panel', 'porto' ); ?></a>
				</p>
				<?php
			} else {
				?>
				<?php /* translators: %s: Theme name */ ?>
				<h1><?php printf( esc_html__( 'Welcome to the setup wizard for %s.', 'porto' ), wp_get_theme() ); ?></h1>
				<?php /* translators: %s: Theme name */ ?>
				<p class="lead"><?php printf( esc_html__( 'This quick setup wizard will help you configure your new website. This wizard will install the required WordPress plugins, etc.', 'porto' ), wp_get_theme() ); ?></p>
				<p><?php esc_html_e( "If you don't want to go through the wizard, you can skip and return to the WordPress dashboard.", 'porto' ); ?></p>
				<p class="porto-setup-actions step">
					<a href="<?php echo esc_url( $this->get_next_step_link() ); ?>" class="button-primary button button-large button-next"><?php esc_html_e( "Start", 'porto' ); ?></a>
					<a href="<?php echo esc_url( wp_get_referer() && ! strpos( wp_get_referer(), 'update.php' ) ? wp_get_referer() : admin_url( '' ) ); ?>" class="button button-large"><?php esc_html_e( 'Return to the WordPress Dashboard', 'porto' ); ?></a>
				</p>
				<?php
			}
		}

		public function porto_setup_wizard_welcome_save() {

			check_admin_referer( 'porto-setup' );
			return false;
		}

		public function porto_setup_wizard_status() {
			?>
			<h1><?php esc_html_e( 'System Status', 'porto' ); ?></h1>
			<?php include_once porto_admin . '/admin_pages/mini-status.php'; ?>
			<p class="porto-setup-actions step">
				<a href="<?php echo esc_url( $this->get_next_step_link() ); ?>" class="button-primary button button-large button-next" data-callback="install_plugins"><?php esc_html_e( 'Continue', 'porto' ); ?></a>
			</p>
			<?php
		}

		public function porto_setup_wizard_status_save() {

			check_admin_referer( 'porto-setup' );
		}

		private function _wp_get_attachment_id_by_post_name( $post_name ) {
			global $wpdb;
			$str   = $post_name;
			$posts = $wpdb->get_results( "SELECT * FROM $wpdb->posts WHERE post_title = '$str' ", OBJECT );
			if ( $posts ) {
				return $posts[0]->ID;
			}
		}

		private function _get_plugins() {
			$instance         = call_user_func( array( get_class( $GLOBALS['tgmpa'] ), 'get_instance' ) );
			$plugin_func_name = 'is_plugin_active';
			$plugins          = array(
				'all'      => array(), // Meaning: all plugins which still have open actions.
				'install'  => array(),
				'update'   => array(),
				'activate' => array(),
			);

			foreach ( $instance->plugins as $slug => $plugin ) {
				if ( $instance->$plugin_func_name( $slug ) && false === $instance->does_plugin_have_update( $slug ) ) {
					continue;
				} else {
					$plugins['all'][ $slug ] = $plugin;

					if ( ! $instance->is_plugin_installed( $slug ) ) {
						$plugins['install'][ $slug ] = $plugin;
					} else {
						if ( false !== $instance->does_plugin_have_update( $slug ) ) {
							$plugins['update'][ $slug ] = $plugin;
						}

						if ( $instance->can_plugin_activate( $slug ) ) {
							$plugins['activate'][ $slug ] = $plugin;
						}
					}
				}
			}
			return $plugins;
		}

		/**
		 * Page setup
		 */
		public function porto_setup_wizard_default_plugins() {

			tgmpa_load_bulk_installer();
			if ( ! class_exists( 'TGM_Plugin_Activation' ) || ! isset( $GLOBALS['tgmpa'] ) ) {
				die( 'Failed to find TGM' );
			}
			$plugins = $this->_get_plugins();

			$method = '';
			$fields = array_keys( $_POST );

			?>
			<h1><?php esc_html_e( 'Default Plugins', 'porto' ); ?></h1>
			<form method="post">

				<?php
				$plugins = $this->_get_plugins();
				if ( count( $plugins['all'] ) ) {
					?>
					<p class="lead"><?php esc_html_e( 'This will install the default plugins which are used in U.Porto WP.', 'porto' ); ?></p>
					<p><?php esc_html_e( 'Please check the plugins to install.', 'porto' ); ?></p>
					<ul class="porto-setup-wizard-plugins">
						<?php
						foreach ( $plugins['all'] as $slug => $plugin ) {
							if ( isset( $plugin['visibility'] ) && 'speed_wizard' == $plugin['visibility'] ) {
								continue;
							}
							?>
							<?php if ( 'wysija-newsletters' === $plugin['slug'] ) : ?>
								<li class="separator">
									<a href="#" class="button-load-plugins"><?php esc_html_e( 'Load more plugins fully compatible with Porto', 'porto' ); ?></a>
								</li>
							<?php endif; ?>
							<li data-slug="<?php echo esc_attr( $slug ); ?>"<?php echo isset( $plugin['visibility'] ) && 'hidden' === $plugin['visibility'] ? ' class="hidden"' : ''; ?>>
								<label class="checkbox checkbox-inline">
									<input type="checkbox" name="setup-plugin"<?php echo ! $plugin['required'] ? '' : ' checked="checked"'; ?>>
									<?php echo esc_html( $plugin['name'] ); ?>
									<span>
									<?php
										$key = '';
									if ( isset( $plugins['install'][ $slug ] ) ) {
										$key = esc_html__( 'Installation', 'porto' );
									} elseif ( isset( $plugins['update'][ $slug ] ) ) {
										$key = esc_html__( 'Update', 'porto' );
									} elseif ( isset( $plugins['activate'][ $slug ] ) ) {
										$key = esc_html__( 'Activation', 'porto' );
									}
									if ( $key ) {
										if ( $plugin['required'] ) {
											/* translators: %s: Plugin name */
											printf( esc_html__( '%s required', 'porto' ), $key );
										} else {
											/* translators: %s: Plugin name */
											printf( esc_html__( '%s recommended', 'porto' ), $key );
										}
									}
									?>
									</span>
								</label>
								<div class="spinner"></div>
							</li>
							<?php if ( 'porto-functionality' === $plugin['slug'] ) : ?>
								<li class="separator"></li>
							<?php endif; ?>
						<?php } ?>
					</ul>
					<?php
				} else {
					echo '<p class="lead">' . esc_html__( 'All plugins are already installed. Please continue.', 'porto' ) . '</p>';
				}
				?>

				<p class="porto-setup-actions step">
					<a href="<?php echo esc_url( $this->get_next_step_link() ); ?>" class="button-primary button button-large button-next" data-callback="install_plugins"><?php esc_html_e( 'Continue', 'porto' ); ?></a>
					<?php wp_nonce_field( 'porto-setup' ); ?>
				</p>
			</form>
			<?php
		}


		public function ajax_plugins() {
			if ( ! check_ajax_referer( 'porto_setup_wizard_nonce', 'wpnonce' ) || empty( $_POST['slug'] ) ) {
				wp_send_json_error(
					array(
						'error'   => 1,
						'message' => esc_html__(
							'No Slug Found',
							'porto'
						),
					)
				);
			}
			$json = array();
			// send back some json we use to hit up TGM
			$plugins = $this->_get_plugins();
			// what are we doing with this plugin?
			foreach ( $plugins['activate'] as $slug => $plugin ) {
				if ( $_POST['slug'] == $slug ) {
					$json = array(
						'url'           => esc_url( admin_url( $this->tgmpa_url ) ),
						'plugin'        => array( $slug ),
						'tgmpa-page'    => $this->tgmpa_menu_slug,
						'plugin_status' => 'all',
						'_wpnonce'      => wp_create_nonce( 'bulk-plugins' ),
						'action'        => 'tgmpa-bulk-activate',
						'action2'       => -1,
						'message'       => esc_html__( 'Activating Plugin', 'porto' ),
					);
					break;
				}
			}
			foreach ( $plugins['update'] as $slug => $plugin ) {
				if ( $_POST['slug'] == $slug ) {
					$json = array(
						'url'           => esc_url( admin_url( $this->tgmpa_url ) ),
						'plugin'        => array( $slug ),
						'tgmpa-page'    => $this->tgmpa_menu_slug,
						'plugin_status' => 'all',
						'_wpnonce'      => wp_create_nonce( 'bulk-plugins' ),
						'action'        => 'tgmpa-bulk-update',
						'action2'       => -1,
						'message'       => esc_html__( 'Updating Plugin', 'porto' ),
					);
					break;
				}
			}
			foreach ( $plugins['install'] as $slug => $plugin ) {
				if ( $_POST['slug'] == $slug ) {
					$json = array(
						'url'           => esc_url( admin_url( $this->tgmpa_url ) ),
						'plugin'        => array( $slug ),
						'tgmpa-page'    => $this->tgmpa_menu_slug,
						'plugin_status' => 'all',
						'_wpnonce'      => wp_create_nonce( 'bulk-plugins' ),
						'action'        => 'tgmpa-bulk-install',
						'action2'       => -1,
						'message'       => esc_html__( 'Installing Plugin', 'porto' ),
					);
					break;
				}
			}

			if ( $json ) {
				$json['hash'] = md5( serialize( $json ) ); // used for checking if duplicates happen, move to next plugin
				wp_send_json( $json );
			} else {
				wp_send_json(
					array(
						'done'    => 1,
						'message' => esc_html__(
							'Success',
							'porto'
						),
					)
				);
			}
			exit;
		}

		/**
		 * Final step
		 */
		public function porto_setup_wizard_ready() {

			update_option( 'porto_setup_complete', time() );
			?>

			<h1><?php esc_html_e( 'Your Website is Ready!', 'porto' ); ?></h1>
			<p class="lead"><?php echo esc_html__( 'You can now make changes to the look and feel of this site using the theme options panel.', 'porto' );?></p>
			<p class="porto-setup-actions">
				<a href="<?php echo esc_url( admin_url() ); ?>" class="button button-large"><?php esc_html_e( 'Return to the WordPress Dashboard', 'porto' ); ?></a>
			</p>
			<?php
		}
	}
}

add_action( 'after_setup_theme', 'porto_theme_setup_wizard', 10 );

if ( ! function_exists( 'porto_theme_setup_wizard' ) ) :
	function porto_theme_setup_wizard() {
		$instance = Porto_Theme_Setup_Wizard::get_instance();
	}
endif;
