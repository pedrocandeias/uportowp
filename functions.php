<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Define variables
 */
define( 'porto_lib', get_template_directory() . '/inc' );       // library directory
define( 'porto_admin', porto_lib . '/admin' );                    // admin directory
define( 'porto_plugins', porto_lib . '/plugins' );                  // plugins directory
define( 'porto_content_types', porto_lib . '/content_types' );            // content_types directory
define( 'porto_menu', porto_lib . '/menu' );                     // menu directory
define( 'porto_functions', porto_lib . '/functions' );                // functions directory
define( 'porto_options_dir', porto_admin . '/theme_options' );          // options directory
define( 'porto_dir', get_template_directory() );                // template directory
define( 'porto_uri', get_template_directory_uri() );            // template directory uri
define( 'porto_css', porto_uri . '/css' );                      // css uri
define( 'porto_js', porto_uri . '/js' );                       // javascript uri
define( 'porto_plugins_uri', porto_uri . '/inc/plugins' );              // plugins uri
define( 'porto_options_uri', porto_uri . '/inc/admin/theme_options' );  // theme options uri
define( 'porto_lib_uri', porto_uri . '/inc/lib' );                  // library uri
$theme_version = '';
$theme         = wp_get_theme();
if ( is_child_theme() ) {
	$theme = wp_get_theme( $theme->template );
}
$theme_version = $theme->version;
define( 'porto_version', $theme_version );                    // set current version
/**
 * WordPress theme check
 */
// set content width
if ( ! isset( $content_width ) ) {
	$content_width = 1140;
}
/**
 * Porto content types functions
 */
require_once porto_functions . '/content_type.php';
/**
 * Porto functions
 */
require_once porto_functions . '/functions.php';
/**
 * Menu
 */
require_once porto_menu . '/menu.php';

/**
 * Porto theme options
 */
require_once porto_admin . '/theme_options.php';

/**
 * Porto admin options
 */
if ( current_user_can( 'manage_options' ) ) {
	require_once porto_admin . '/admin.php';
}
/**
 * Porto Extensions
 */
require_once porto_lib . '/lib/setup.php';
/**
 * Install Plugins
 */
require_once porto_plugins . '/plugins.php';
/**
 * Theme support & Theme setup
 */
// theme setup
if ( ! function_exists( 'porto_setup' ) ) :
	function porto_setup() {
		add_theme_support( 'title-tag' );
		// translation
		load_theme_textdomain( 'porto', porto_dir . '/languages' );
		load_child_theme_textdomain( 'porto', get_stylesheet_directory() . '/languages' );

		global $porto_settings, $porto_settings_optimize;
		// default rss feed links
		add_theme_support( 'automatic-feed-links' );
		// add support for post thumbnails
		add_theme_support( 'post-thumbnails' );
		// add image sizes
		add_image_size( 'blog-large', 1140, 445, true );
		add_image_size( 'blog-medium', 463, 348, true );
		add_image_size( 'blog-masonry', 640, 9999, false );
		add_image_size( 'blog-masonry-small', 400, 9999, false );
		add_image_size( 'blog-grid', 640, 480, true );
		add_image_size( 'blog-grid-small', 400, 300, true );
		add_image_size( 'related-post', ( isset( $porto_settings['post-related-image-size'] ) && (int) $porto_settings['post-related-image-size']['width'] ) ? (int) $porto_settings['post-related-image-size']['width'] : 450, ( isset( $porto_settings['post-related-image-size'] ) && (int) $porto_settings['post-related-image-size']['height'] ) ? (int) $porto_settings['post-related-image-size']['height'] : 231, true );
		if ( isset( $porto_settings['enable-portfolio'] ) && $porto_settings['enable-portfolio'] ) {
			add_image_size( 'portfolio-grid-one', 1140, 595, true );
			add_image_size( 'portfolio-grid-two', 560, 560, true );
			add_image_size( 'portfolio-grid', 367, 367, true );
			add_image_size( 'portfolio-masonry', 367, 9999, false );
			add_image_size( 'portfolio-full', 1140, 595, true );
			add_image_size( 'portfolio-large', 560, 367, true );
			add_image_size( 'portfolio-medium', 367, 367, true );
			add_image_size( 'portfolio-timeline', 560, 560, true );
			add_image_size( 'related-portfolio', 367, 367, true );
			add_image_size( 'portfolio-cat-stripes', 494, 1080, true );
			add_image_size( 'portfolio-cat-parallax', 1970, 627, true );
			add_image_size( 'portfolio-thumbnail', 200, 150, true );
		}

		if ( isset( $porto_settings['enable-member'] ) && $porto_settings['enable-member'] ) {
			add_image_size( 'member-two', 560, 560, true );
			add_image_size( 'member', 367, 367, true );
		}
		add_image_size( 'widget-thumb-medium', 85, 85, true );
		add_image_size( 'widget-thumb', 50, 50, true );
		// allow shortcodes in widget text
		add_filter( 'widget_text', 'do_shortcode' );
		// register menus
		register_nav_menus(
			array(
				'main_menu'         => __( 'Main Menu', 'porto' ),
				'secondary_menu'    => __( 'Secondary Menu', 'porto' ),
				'sidebar_menu'      => __( 'Sidebar Menu', 'porto' ),
				'top_nav'           => __( 'Top Navigation', 'porto' ),
				'view_switcher'     => __( 'View Switcher', 'porto' ),
			)
		);

		// add post formats
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio', 'chat' ) );

		$porto_settings_optimize = get_option( 'porto_settings_optimize', array() );

		if ( isset( $porto_settings['google-webfont-loader'] ) && $porto_settings['google-webfont-loader'] ) {
			add_filter( 'wp_head', 'porto_google_webfont_loader' );
		}

		// add support
		add_theme_support( 'wp-block-styles' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'align-wide' );
		add_theme_support( 'editor-styles' );

		// Editor color palette.
		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => __( 'Primary', 'primary' ),
					'slug'  => 'primary',
					'color' => $porto_settings['skin-color'],
				),
				array(
					'name'  => __( 'Secondary', 'primary' ),
					'slug'  => 'secondary',
					'color' => $porto_settings['secondary-color'],
				),
				array(
					'name'  => __( 'Tertiary', 'primary' ),
					'slug'  => 'tertiary',
					'color' => $porto_settings['tertiary-color'],
				),
				array(
					'name'  => __( 'Quaternary', 'primary' ),
					'slug'  => 'quaternary',
					'color' => $porto_settings['quaternary-color'],
				),
				array(
					'name'  => __( 'Dark', 'primary' ),
					'slug'  => 'dark',
					'color' => $porto_settings['dark-color'],
				),
				array(
					'name'  => __( 'Light', 'primary' ),
					'slug'  => 'light',
					'color' => $porto_settings['light-color'],
				),
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'porto_setup' );
/**
 * Enqueue css, js files
 */
add_action( 'wp_enqueue_scripts', 'porto_css', 1000 );
add_action( 'wp_enqueue_scripts', 'porto_scripts', 1000 );
add_action( 'admin_enqueue_scripts', 'porto_admin_css', 1000 );
add_action( 'admin_enqueue_scripts', 'porto_admin_scripts', 1000 );
if ( is_admin() ) {
	add_action( 'enqueue_block_editor_assets', 'porto_admin_block_css', 1000 );
}

function porto_google_webfont_loader() {

	global $porto_settings;

	$gfont        = array();
	$gfont_weight = array( 200, 300, 400, 700, 800 );
	$fonts        = porto_settings_google_fonts();
	foreach ( $fonts as $option ) {
		if ( isset( $porto_settings[ $option . '-font' ]['google'] ) && 'false' !== $porto_settings[ $option . '-font' ]['google'] ) {
			$font        = isset( $porto_settings[ $option . '-font' ]['font-family'] ) ? urlencode( $porto_settings[ $option . '-font' ]['font-family'] ) : '';
			$font_weight = isset( $porto_settings[ $option . '-font' ]['font-weight'] ) ? $porto_settings[ $option . '-font' ]['font-weight'] : '';
			if ( $font && ! in_array( $font, $gfont ) ) {
				$gfont[] = $font;
			}
			if ( $font_weight && ! in_array( $font_weight, $gfont_weight ) ) {
				$gfont_weight[] = $font_weight;
			}
		}
	}

	// font weight
	$gfont_weight = implode( ',', $gfont_weight );

	// charset
	$charsets = array();
	$subsets  = '';
	if ( isset( $porto_settings['select-google-charset'] ) && $porto_settings['select-google-charset'] && isset( $porto_settings['google-charsets'] ) && $porto_settings['google-charsets'] ) {
		foreach ( $porto_settings['google-charsets'] as $charset ) {
			if ( $charset && ! in_array( $charset, $charsets ) ) {
				$charsets[] = $charset;
			}
		}
	}
	if ( ! empty( $charsets ) ) {
		$subsets = implode( ',', $charsets );
	}

	$font_family_arr = array();
	foreach ( $gfont as $font ) {
		$font_family_arr[] = "'" . str_replace( ' ', '+', $font ) . ':' . $gfont_weight . ( $subsets ? ':' . $subsets : '' ) . "'";
		$subsets           = '';
	}
	if ( ! empty( $font_family_arr ) ) {
		?>
		<script type="text/javascript">
		WebFontConfig = {
			google: { families: [ <?php echo implode( ',', $font_family_arr ); ?> ] }
		};
		(function(d) {
			var wf = d.createElement('script'), s = d.scripts[0];
			wf.src = '<?php echo porto_js; ?>/libs/webfont.js';
			wf.async = true;
			s.parentNode.insertBefore(wf, s);
		})(document);</script>
		<?php
	}
}

function porto_css() {
	// deregister plugin styles
	wp_deregister_style( 'font-awesome' );
	wp_dequeue_style( 'font-awesome' );
	wp_dequeue_style( 'bsf-Simple-Line-Icons' );
	wp_deregister_style( 'animate-css' );
	wp_dequeue_style( 'animate-css' );

	global $porto_settings, $porto_settings_optimize, $post;

	// import revslider js/css files for only used pages
	if ( class_exists( 'RevSlider' ) && isset( $porto_settings_optimize['optimize_revslider'] ) && $porto_settings_optimize['optimize_revslider'] ) {
		$use_revslider = false;
		$banner_type   = porto_get_meta_value( 'banner_type' );
		$rev_slider    = porto_get_meta_value( 'rev_slider' );
		if ( 'rev_slider' === $banner_type && ! empty( $rev_slider ) ) {
			$use_revslider = true;
		}
		if ( ! $use_revslider && is_singular( 'portfolio' ) ) {
			$portfolio_layout = get_post_meta( $post->ID, 'portfolio_layout', true );
			$portfolio_layout = ( 'default' == $portfolio_layout || ! $portfolio_layout ) ? $porto_settings['portfolio-content-layout'] : $portfolio_layout;
			if ( 'carousel' == $portfolio_layout ) {
				$use_revslider = true;
			}
		}
		if ( ! $use_revslider && isset( $porto_settings_optimize['optimize_revslider_pages'] ) ) {
			$rev_pages = $porto_settings_optimize['optimize_revslider_pages'];
			if ( $rev_pages && ! empty( $rev_pages ) ) {
				if ( ! is_search() && ! is_404() && isset( $post->ID ) && in_array( $post->ID, $rev_pages ) ) {
					$use_revslider = true;
				}
			}
		}
		if ( ! $use_revslider && isset( $porto_settings_optimize['optimize_revslider_portfolio'] ) && $porto_settings_optimize['optimize_revslider_portfolio'] && ( ( function_exists( 'is_porto_portfolios_page' ) && is_porto_portfolios_page() ) || is_tax( 'portfolio_cat' ) || is_tax( 'portfolio_skills' ) ) ) {
			$use_revslider = true;
		}
		if ( ! $use_revslider ) {
			wp_dequeue_style( 'rs-plugin-settings' );
			wp_dequeue_script( 'tp-tools' );
			wp_dequeue_script( 'revmin' );
		}
	}

	if ( ! wp_style_is( 'js_composer_front' ) ) {
		wp_enqueue_style( 'js_composer_front' );
	}
	// load ultimate addons default js
	$bsf_options             = get_option( 'bsf_options' );
	$ultimate_global_scripts = ( isset( $bsf_options['ultimate_global_scripts'] ) ) ? $bsf_options['ultimate_global_scripts'] : false;
	if ( 'enable' !== $ultimate_global_scripts ) {
		$ultimate_css = get_option( 'ultimate_css' );
		if ( 'enable' == $ultimate_css ) {
			if ( ! wp_style_is( 'ultimate-style-min' ) ) {
				wp_enqueue_style( 'ultimate-style-min' );
			}
		} else {
			if ( ! wp_style_is( 'ultimate-style' ) ) {
				wp_enqueue_style( 'ultimate-style' );
			}
		}
	}

	/*
	 register styles */
	// plugins styles
	wp_deregister_style( 'porto-plugins' );
	wp_register_style( 'porto-plugins', porto_uri . '/css/plugins.css?ver=' . porto_version );

	// default styles
	wp_deregister_style( 'porto-theme' );
	wp_register_style( 'porto-theme', porto_uri . '/css/theme.css?ver=' . porto_version );

	// shortcodes styles
	wp_deregister_style( 'porto-shortcodes' );
	porto_register_style( 'porto-shortcodes', 'shortcodes', false, true );

	// bbpress, buddypress styles
	if ( class_exists( 'bbPress' ) || class_exists( 'BuddyPress' ) ) {
		wp_deregister_style( 'porto-theme-bbpress' );
			wp_register_style( 'porto-theme-bbpress', porto_uri . '/css/theme_bbpress.css?ver=' . porto_version );
	}

	// custom styles
	wp_deregister_style( 'porto-style' );
	wp_register_style( 'porto-style', porto_uri . '/style.css' );

	// Load Google fonts
	if ( ! isset( $porto_settings['google-webfont-loader'] ) || ! $porto_settings['google-webfont-loader'] ) {
		porto_include_google_font();
	}

	// ie styles
	global $wp_styles;
	wp_deregister_style( 'porto-ie' );
	wp_register_style( 'porto-ie', porto_uri . '/css/ie.css?ver=' . porto_version );

	/* enqueue styles */
	wp_enqueue_style( 'porto-bootstrap' );
	wp_enqueue_style( 'porto-plugins' );
	wp_enqueue_style( 'porto-theme' );
	wp_enqueue_style( 'porto-shortcodes' );
	if ( class_exists( 'bbPress' ) || class_exists( 'BuddyPress' ) ) {
		wp_enqueue_style( 'porto-theme-bbpress' );
	}
	wp_enqueue_style( 'porto-dynamic-style' );
	wp_enqueue_style( 'porto-style' );

	wp_enqueue_style( 'porto-ie' );
	$wp_styles->add_data( 'porto-ie', 'conditional', 'lt IE 10' );
	if ( current_user_can( 'edit_theme_options' ) ) {
		// admin style
		wp_enqueue_style( 'porto_admin_bar', porto_css . '/admin_bar.css', false, porto_version, 'all' );
	}
	porto_enqueue_revslider_css();
}

if ( ! function_exists( 'porto_include_google_font' ) ) :
	function porto_include_google_font() {
		global $porto_settings;
		$gfont        = array();
		$gfont_weight = array( 200, 300, 400, 700, 800 );
		$fonts        = porto_settings_google_fonts();
		foreach ( $fonts as $option ) {
			if ( isset( $porto_settings[ $option . '-font' ]['google'] ) && 'false' !== $porto_settings[ $option . '-font' ]['google'] ) {
				$font        = isset( $porto_settings[ $option . '-font' ]['font-family'] ) ? urlencode( $porto_settings[ $option . '-font' ]['font-family'] ) : '';
				$font_weight = isset( $porto_settings[ $option . '-font' ]['font-weight'] ) ? $porto_settings[ $option . '-font' ]['font-weight'] : '';
				if ( $font && ! in_array( $font, $gfont ) ) {
					$gfont[] = $font;
				}
				if ( $font_weight && ! in_array( $font_weight, $gfont_weight ) ) {
					$gfont_weight[] = $font_weight;
				}
			}
		}
		$gfont_weight    = implode( ',', $gfont_weight );
		$font_family     = '';
		$font_family_arr = array();
		foreach ( $gfont as $font ) {
			$font_family_arr[] = str_replace( ' ', '+', $font ) . ':' . $gfont_weight;
		}
		if ( ! empty( $font_family_arr ) ) {
			$font_family = implode( '%7C', $font_family_arr );
		}
		if ( $font_family ) {
			$charsets = array();
			if ( isset( $porto_settings['select-google-charset'] ) && $porto_settings['select-google-charset'] && isset( $porto_settings['google-charsets'] ) && $porto_settings['google-charsets'] ) {
				foreach ( $porto_settings['google-charsets'] as $charset ) {
					if ( $charset && ! in_array( $charset, $charsets ) ) {
						$charsets[] = $charset;
					}
				}
			}

			$custom_font_args = array(
				'family' => $font_family,
			);
			if ( ! empty( $charsets ) ) {
				$custom_font_args['subset'] = implode( ',', $charsets );
			}

			$google_font_url = add_query_arg( $custom_font_args, '//fonts.googleapis.com/css' );
			wp_register_style( 'porto-google-fonts', esc_url( $google_font_url ) );
			wp_enqueue_style( 'porto-google-fonts' );
		}
	}
endif;

function porto_admin_block_css() {

		porto_register_style( 'porto-shortcodes', 'shortcodes', false, true );


	porto_include_google_font();

	wp_enqueue_style( 'porto-shortcodes' );

	porto_register_style( 'porto-blocks-style-editor', 'style-editor', false, true, array( 'wp-edit-blocks' ) );
	wp_enqueue_style( 'porto-blocks-style-editor' );
}

function porto_register_style( $handle, $filename, $themedir = true, $load_default = true, $deps = array() ) {
	if ( $themedir ) {
		$blog_id  = porto_get_blog_id();
		$css_file = porto_dir . '/css/' . $filename . '_' . $blog_id . '.css';
		$css_uri  = porto_uri . '/css/' . $filename . '_' . $blog_id . '.css';
	} else {
		$upload_dir = wp_upload_dir();
		$css_file   = $upload_dir['basedir'] . '/porto_styles/' . $filename . '.css';
		$css_uri    = $upload_dir['baseurl'] . '/porto_styles/' . $filename . '.css';
	}
	if ( file_exists( $css_file ) ) {
		wp_register_style( $handle, $css_uri, $deps, porto_version );
	} elseif ( $load_default ) {
		if ( 'style-editor' == $filename ) {
			ob_start();
			require_once porto_dir . '/style-editor.php';
			$css = ob_get_contents();
			ob_end_clean();
			wp_add_inline_style( 'porto-shortcodes', $css );
		} else {
			wp_register_style( $handle, porto_uri . '/css/' . $filename . '.css', $deps, porto_version );
		}
	}
}
function porto_scripts() {
	global $porto_settings, $porto_settings_optimize;
	if ( ! is_admin() && ! in_array( $GLOBALS['pagenow'], array( 'wp-login.php', 'wp-register.php' ) ) ) {
		wp_reset_postdata();

		// comment reply
		if ( is_singular() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
		// load wc variation script
		wp_enqueue_script( 'wc-add-to-cart-variation' );
		// load visual composer default js
		if ( ! wp_script_is( 'wpb_composer_front_js' ) ) {
			wp_enqueue_script( 'wpb_composer_front_js' );
		}
		// load ultimate addons default js
		$bsf_options             = get_option( 'bsf_options' );
		$ultimate_global_scripts = ( isset( $bsf_options['ultimate_global_scripts'] ) ) ? $bsf_options['ultimate_global_scripts'] : false;
		if ( 'enable' !== $ultimate_global_scripts ) {
			$is_ajax             = false;
			$ultimate_ajax_theme = get_option( 'ultimate_ajax_theme' );
			if ( 'enable' == $ultimate_ajax_theme ) {
				$is_ajax = true;
			}
			$ultimate_js  = get_option( 'ultimate_js', 'disable' );
			$bsf_dev_mode = ( isset( $bsf_options['dev_mode'] ) ) ? $bsf_options['dev_mode'] : false;
			if ( ( 'enable' == $ultimate_js || $is_ajax ) && ( 'enable' != $bsf_dev_mode ) ) {
				if ( ! wp_script_is( 'ultimate-script' ) ) {
					wp_enqueue_script( 'ultimate-script' );
				}
			}
		}

		$min_suffix = '';
		if ( isset( $porto_settings_optimize['minify_css'] ) && $porto_settings_optimize['minify_css'] ) {
			$min_suffix = '.min';
		}
		// porto scripts
		wp_register_script( 'popper', porto_js . '/libs/popper.min.js', array( 'jquery', 'jquery-migrate' ), '1.12.5', true );
		wp_enqueue_script( 'popper' );

		$optimize_suffix = '';
		if ( isset( $porto_settings_optimize['optimize_bootstrap'] ) && $porto_settings_optimize['optimize_bootstrap'] ) {
			$optimize_suffix = '.optimized';
		}
		wp_deregister_script( 'bootstrap' );
		wp_register_script( 'bootstrap', porto_js . '/bootstrap' . $optimize_suffix . $min_suffix . '.js', array( 'popper' ), '4.1.3', true );
		wp_enqueue_script( 'bootstrap' );

		/* plugins */
		wp_register_script( 'jquery-cookie', porto_js . '/libs/jquery.cookie.min.js', array(), '1.4.1', true );
		wp_register_script( 'owl-carousel', porto_js . '/libs/owl.carousel.min.js', array(), '2.3.4', true );
		wp_register_script( 'isotope', porto_js . '/libs/isotope.pkgd.min.js', array(), '3.0.1', true );
		wp_register_script( 'jquery-appear', porto_js . '/libs/jquery.appear.min.js', array(), null, true );
		wp_register_script( 'easypiechart', porto_js . '/libs/easypiechart.min.js', array(), '2.1.4', true );
		wp_register_script( 'jquery-fitvids', porto_js . '/libs/jquery.fitvids.min.js', array(), '1.1', true );
		wp_register_script( 'jquery-mousewheel', porto_js . '/libs/jquery.mousewheel.min.js', array(), '3.1.13', true );
		wp_register_script( 'jquery-matchHeight', porto_js . '/libs/jquery.matchHeight.min.js', array(), null, true );
		wp_register_script( 'modernizr', porto_js . '/libs/modernizr.js', array(), '2.8.3', true );
		wp_register_script( 'jquery-magnific-popup', porto_js . '/libs/jquery.magnific-popup.min.js', array(), '1.1.0', true );
		wp_register_script( 'jquery-selectric', porto_js . '/libs/jquery.selectric.min.js', array(), '1.9.6', true );

		wp_enqueue_script( 'jquery-cookie' );
		wp_enqueue_script( 'owl-carousel' );
		wp_enqueue_script( 'isotope' );
		wp_enqueue_script( 'jquery-appear' );
		wp_enqueue_script( 'jquery-fitvids' );
		wp_enqueue_script( 'jquery-matchHeight' );
		wp_enqueue_script( 'modernizr' );
		wp_enqueue_script( 'jquery-magnific-popup' );
		if ( $porto_settings['show-searchform'] && isset( $porto_settings['search-cats'] ) && $porto_settings['search-cats'] ) {
			wp_enqueue_script( 'jquery-selectric' );
		}

		wp_register_script( 'jquery-slick', porto_js . '/libs/jquery.slick.min.js', array( 'jquery' ), porto_version, true );
		global $porto_product_layout;

		// load porto theme js file
		wp_deregister_script( 'porto-theme' );
		wp_register_script( 'porto-theme', porto_js . '/theme' . $min_suffix . '.js', array( 'jquery' ), porto_version, true );
		wp_enqueue_script( 'porto-theme' );
		$sticky_header      = porto_get_meta_value( 'sticky_header' );
		$show_sticky_header = false;
		if ( 'no' !== $sticky_header && ( 'yes' === $sticky_header || ( 'yes' !== $sticky_header && $porto_settings['enable-sticky-header'] ) ) ) {
			$show_sticky_header = true;
		}

		global $porto_product_layout;
		wp_localize_script(
			'porto-theme',
			'js_porto_vars',
			array(
				'ajax_url'                  => esc_js( admin_url( 'admin-ajax.php' ) ),
				'change_logo'               => esc_js( isset($porto_settings['change-header-logo']) ),
				'container_width'           => esc_js( isset($porto_settings['container-width']) ),
				'grid_gutter_width'         => esc_js( isset($porto_settings['grid-gutter-width']) ),
				'show_sticky_header'        => esc_js( $show_sticky_header ),
				'show_sticky_header_tablet' => esc_js( isset($porto_settings['enable-sticky-header-tablet']) ),
				'show_sticky_header_mobile' => esc_js( isset($porto_settings['enable-sticky-header-mobile']) ),
				'ajax_loader_url'           => esc_js( str_replace( array( 'http:', 'https:' ), array( '', '' ), porto_uri . '/images/ajax-loader@2x.gif' ) ),
				'slider_loop'               => esc_js( isset($porto_settings['slider-loop']) ),
				'slider_autoplay'           => esc_js( isset($porto_settings['slider-autoplay']) ),
				'slider_autoheight'         => esc_js( isset($porto_settings['slider-autoheight']) ),
				'slider_speed'              => esc_js( isset($porto_settings['slider-speed']) ),
				'slider_nav'                => esc_js( isset($porto_settings['slider-nav']) ),
				'slider_nav_hover'          => esc_js( isset($porto_settings['slider-nav-hover']) ),
				'slider_margin'             => esc_js( isset($porto_settings['slider-margin']) ),
				'slider_dots'               => esc_js( isset($porto_settings['slider-dots']) ),
				'slider_animatein'          => esc_js( isset($porto_settings['slider-animatein']) ),
				'slider_animateout'         => esc_js( isset($porto_settings['slider-animateout']) ),
				'zoom_type'                 => esc_js( isset($porto_settings['zoom-type']) ),
				'zoom_scroll'               => esc_js( isset($porto_settings['zoom-scroll']) ),
				'zoom_lens_size'            => esc_js( isset($porto_settings['zoom-lens-size']) ),
				'zoom_lens_shape'           => esc_js( isset($porto_settings['zoom-lens-shape']) ),
				'zoom_contain_lens'         => esc_js( isset($porto_settings['zoom-contain-lens']) ),
				'zoom_lens_border'          => esc_js( isset($porto_settings['zoom-lens-border']) ),
				'zoom_border_color'         => esc_js( isset($porto_settings['zoom-border-color']) ),
				'zoom_border'               => esc_js( 'inner' == isset($porto_settings['zoom-type']) ? 0 : isset($porto_settings['zoom-border']) ),
				'screen_lg'                 => esc_js( isset($porto_settings['container-width']) + isset($porto_settings['grid-gutter-width']) ),
				/* translators: %url%: Magnific Popup Counter Error Url */
				'mfp_counter'               => esc_js( __( '%curr% of %total%', 'porto' ) ),
				/* translators: %url%: Magnific Popup Ajax Error Url */
				'mfp_img_error'             => esc_js( __( '<a href="%url%">The image</a> could not be loaded.', 'porto' ) ),
				/* translators: %url%: Magnific Popup Ajax Error Url */
				'mfp_ajax_error'            => esc_js( __( '<a href="%url%">The content</a> could not be loaded.', 'porto' ) ),
				'popup_close'               => esc_js( __( 'Close', 'porto' ) ),
				'popup_prev'                => esc_js( __( 'Previous', 'porto' ) ),
				'popup_next'                => esc_js( __( 'Next', 'porto' ) ),
				'request_error'             => esc_js( __( 'The requested content cannot be loaded.<br/>Please try again later.', 'porto' ) ),
				'loader_text'               => esc_js( __( 'Loading...', 'porto' ) ),
				'submenu_back'              => esc_js( __( 'Back', 'porto' ) ),
			)
		);
	}
}
function porto_admin_css() {
	wp_deregister_style( 'font-awesome' );
	wp_dequeue_style( 'font-awesome' );
	wp_enqueue_style( 'font-awesome', porto_css . '/font-awesome.min.css', false, porto_version, 'all' );

	// porto icon font
	wp_enqueue_style( 'porto-font', porto_css . '/Porto-Font/Porto-Font.css', false, porto_version, 'all' );
	// simple line icon font
	wp_dequeue_style( 'bsf-Simple-Line-Icons' );
	wp_dequeue_style( 'porto_shortcodes_simpleline' );
	wp_enqueue_style( 'porto-sli-font', porto_css . '/Simple-Line-Icons/Simple-Line-Icons.css', false, porto_version, 'all' );
	// wp default styles
	wp_enqueue_style( 'wp-color-picker' );
	// codemirror
	// wp_enqueue_style('porto_codemirror', porto_css . '/codemirror.css', false, porto_version, 'all');
	// admin style
	wp_enqueue_style( 'porto_admin', porto_css . '/admin.css', false, porto_version, 'all' );
	wp_enqueue_style( 'porto_admin_bar', porto_css . '/admin_bar.css', false, porto_version, 'all' );
	porto_enqueue_revslider_css();
}
function porto_admin_scripts() {
	if ( function_exists( 'add_thickbox' ) ) {
		add_thickbox();
	}
	wp_enqueue_media();
	global $pagenow;
	if ( in_array( $pagenow, array( 'post.php', 'post-new.php', 'term.php' ) ) ) {
		// codemirror
		/*
		wp_register_script('porto-codemirror', porto_js.'/codemirror/codemirror.min.js', array('jquery'), porto_version, true);
		wp_enqueue_script('porto-codemirror');
		wp_register_script('porto-codemirror-css', porto_js.'/codemirror/css.js', array('porto-codemirror'), porto_version, true);
		wp_enqueue_script('porto-codemirror-css');
		wp_register_script('porto-codemirror-js', porto_js.'/codemirror/javascript.js', array('porto-codemirror'), porto_version, true);
		wp_enqueue_script('porto-codemirror-js');*/
	}
	if ( 'themes.php' == $pagenow && isset( $_GET['page'] ) && 'porto_settings' === $_GET['page'] && defined( 'WPB_VC_VERSION' ) && ! wp_script_is( 'waypoints', 'registered' ) ) {
		wp_register_script( 'waypoints', vc_asset_url( 'lib/waypoints/waypoints.min.js' ), array( 'jquery' ), WPB_VC_VERSION, true );
		wp_enqueue_script( 'waypoints' );
	}
	// admin script
	wp_register_script( 'porto-admin', porto_js . '/admin/admin.min.js', array( 'common', 'jquery', 'media-upload', 'thickbox', 'wp-color-picker' ), porto_version, true );
	wp_enqueue_script( 'porto-admin' );

	$admin_vars = array(
		'import_options_msg' => esc_html__( 'If you want to import demo, please backup current theme options in "Import / Export" section before import. Do you want to import demo?', 'porto' ),
		'theme_option_url'   => esc_url( admin_url( 'themes.php?page=porto_settings' ) ),
	);
	if ( in_array( $pagenow, array( 'themes.php', 'customize.php' ) ) ) {
		$admin_vars['header_default_options'] = json_encode( porto_header_types_default_options() );
	}
	wp_localize_script( 'porto-admin', 'js_porto_admin_vars', $admin_vars );
}

function porto_enqueue_revslider_css() {
	global $porto_settings;
	$style = '';
	if ( $porto_settings['skin-color'] ) {
		$style = '.tparrows:before{color:' . $porto_settings['skin-color'] . ';text-shadow:0 0 3px #fff;}';
	}
	$style .= '.revslider-initialised .tp-loader{z-index:18;}';
	wp_add_inline_style( 'rs-plugin-settings', $style );
}
// retrieves the attachment ID from the file URL
function porto_get_image_id( $image_url ) {
	global $wpdb;
	$attachment = $wpdb->get_col( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url ) );
	if ( isset( $attachment[0] ) ) {
		return $attachment[0];
	} else {
		return false;
	}
}

add_filter( 'github_updater_disable_wpcron', '__return_true' );
