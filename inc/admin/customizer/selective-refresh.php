<?php
/**
 * Porto Customizer Selective Refresh
 *
 * @author     Porto Themes
 * @category   Admin Functions
 * @since      4.8.0
 */

defined( 'ABSPATH' ) || exit;

function porto_customizer_current_state_options() {
	if ( is_customize_preview() ) {
		global $reduxPortoSettings, $porto_settings;
		$new_options    = get_option( $reduxPortoSettings->args['opt_name'] );
		$porto_settings = wp_parse_args( $new_options, $porto_settings );
	}
}
add_action( 'wp_loaded', 'porto_customizer_current_state_options', 99 );

function porto_customizer_refresh_partials( WP_Customize_Manager $wp_customize ) {
	if ( ! isset( $wp_customize->selective_refresh ) ) {
		return;
	}

	/* header */

	$settings = array( 'porto_settings[logo]', 'porto_settings[logo-retina]', 'porto_settings[sticky-logo]', 'porto_settings[sticky-logo-retina]', 'porto_settings[logo-overlay]', 'porto_settings[show-header-top]', 'porto_settings[change-header-logo]', 'porto_settings[welcome-msg]', 'porto_settings[header-contact-info]', 'porto_settings[header-copyright]', 'porto_settings[show-header-tooltip]', 'porto_settings[header-tooltip]', 'porto_settings[logo-retina-width]', 'porto_settings[logo-retina-height]', 'porto_settings[header-type-select]', 'porto_settings[header-type]', 'porto_settings[wpml-switcher]', 'porto_settings[wpml-switcher-pos]', 'porto_settings[wpml-switcher-html]', 'porto_settings[wcml-switcher]', 'porto_settings[wcml-switcher-pos]', 'porto_settings[wcml-switcher-html]', 'porto_settings[show-header-socials]', 'porto_settings[show-searchform]', 'porto_settings[menu-login-pos]', 'porto_settings[menu-enable-register]', 'porto_settings[menu-show-login-icon]', 'porto_settings[menu-block]' );
	$wp_customize->selective_refresh->add_partial(
		'header',
		array(
			'selector'            => '#header',
			'container_inclusive' => true,
			'settings'            => $settings,
			'render_callback'     => function() {
				return get_template_part( 'header/header' );
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'header_social_links',
		array(
			'selector'            => '#header .share-links',
			'container_inclusive' => false,
			'settings'            => array( 'porto_settings[header-socials-nofollow]', 'porto_settings[header-social-facebook]', 'porto_settings[header-social-twitter]', 'porto_settings[header-social-rss]', 'porto_settings[header-social-pinterest]', 'porto_settings[header-social-youtube]', 'porto_settings[header-social-instagram]', 'porto_settings[header-social-skype]', 'porto_settings[header-social-linkedin]', 'porto_settings[header-social-googleplus]', 'porto_settings[header-social-vk]', 'porto_settings[header-social-xing]', 'porto_settings[header-social-tumblr]', 'porto_settings[header-social-reddit]', 'porto_settings[header-social-vimeo]', 'porto_settings[header-social-telegram]', 'porto_settings[header-social-yelp]', 'porto_settings[header-social-flickr]', 'porto_settings[header-social-whatsapp]' ),
			'render_callback'     => function() {
				return porto_header_socials();
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'searchform',
		array(
			'selector'            => '#header .searchform-popup',
			'container_inclusive' => true,
			'settings'            => array( 'porto_settings[search-layout]', 'porto_settings[search-type]', 'porto_settings[search-cats]', 'porto_settings[search-sub-cats]' ),
			'render_callback'     => function() {
				return porto_search_form();
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'breadcrumb',
		array(
			'selector'            => '.page-top',
			'container_inclusive' => true,
			'settings'            => array( 'porto_settings[breadcrumbs-parallax]', 'porto_settings[breadcrumbs-parallax-speed]', 'porto_settings[show-pagetitle]', 'porto_settings[show-breadcrumbs]', 'porto_settings[pagetitle-archives]', 'porto_settings[pagetitle-parent]', 'porto_settings[breadcrumbs-prefix]', 'porto_settings[breadcrumbs-blog-link]', 'porto_settings[breadcrumbs-archives-link]', 'porto_settings[breadcrumbs-categories]', 'porto_settings[breadcrumbs-delimiter]', 'porto_settings[breadcrumbs-type]', 'porto_settings[blog-title]', 'porto_settings[breadcrumbs-css-class]' ),
			'render_callback'     => function() {
				return get_template_part( 'breadcrumbs' );
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'footer',
		array(
			'selector'            => '#footer',
			'container_inclusive' => true,
			'settings'            => array( 'porto_settings[footer-parallax]', 'porto_settings[footer-parallax-speed]', 'porto_settings[footer-logo]', 'porto_settings[footer-ribbon]', 'porto_settings[footer-copyright-pos]','porto_settings[show-footer-tooltip]', 'porto_settings[footer-tooltip]', 'porto_settings[footer-type]', 'porto_settings[footer-customize]', 'porto_settings[footer-widget1]', 'porto_settings[footer-widget2]', 'porto_settings[footer-widget3]', 'porto_settings[footer-widget4]', 'porto_settings[blog-footer_view]' ),
			'render_callback'     => function() {
				return get_template_part( 'footer/footer' );
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'blog-content_top',
		array(
			'selector'            => '#content-top',
			'container_inclusive' => false,
			'fallback_refresh'    => false,
			'settings'            => array( 'porto_settings[blog-content_top]' ),
			'render_callback'     => function() {
				$result = '';
				$content_top = porto_get_meta_value( 'content_top' );
				if ( $content_top ) {
					foreach ( explode( ',', $content_top ) as $block ) {
						$result .= do_shortcode( '[porto_block name="' . $block . '"]' );
					}
				}
				return $result;
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'blog-content_bottom',
		array(
			'selector'            => '#content-bottom',
			'container_inclusive' => false,
			'fallback_refresh'    => false,
			'settings'            => array( 'porto_settings[blog-content_bottom]' ),
			'render_callback'     => function() {
				$result = '';
				$content_bottom = porto_get_meta_value( 'content_bottom' );
				if ( $content_bottom ) {
					foreach ( explode( ',', $content_bottom ) as $block ) {
						$result .= do_shortcode( '[porto_block name="' . $block . '"]' );
					}
				}
				return $result;
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'blog-content_inner_top',
		array(
			'selector'            => '#content-inner-top',
			'container_inclusive' => false,
			'fallback_refresh'    => false,
			'settings'            => array( 'porto_settings[blog-content_inner_top]' ),
			'render_callback'     => function() {
				$result = '';
				$content_inner_top = porto_get_meta_value( 'content_inner_top' );
				if ( $content_inner_top ) {
					foreach ( explode( ',', $content_inner_top ) as $block ) {
						$result .= do_shortcode( '[porto_block name="' . $block . '"]' );
					}
				}
				return $result;
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'blog-content_inner_bottom',
		array(
			'selector'            => '#content-inner-bottom',
			'container_inclusive' => false,
			'fallback_refresh'    => false,
			'settings'            => array( 'porto_settings[blog-content_inner_bottom]' ),
			'render_callback'     => function() {
				$result = '';
				$content_inner_bottom = porto_get_meta_value( 'content_inner_bottom' );
				if ( $content_inner_bottom ) {
					foreach ( explode( ',', $content_inner_bottom ) as $block ) {
						$result .= do_shortcode( '[porto_block name="' . $block . '"]' );
					}
				}
				return $result;
			},
		)
	);
	$wp_customize->selective_refresh->add_partial(
		'single-post',
		array(
			'selector'            => '.single-post article.post',
			'container_inclusive' => true,
			'fallback_refresh'    => false,
			'settings'            => array( 'porto_settings[post-slideshow]', 'porto_settings[post-title]', 'porto_settings[post-share]', 'porto_settings[post-share-position]', 'porto_settings[post-author]', 'porto_settings[post-comments]' ),
			'render_callback'     => function() {
				if ( is_singular( 'post' ) ) {
					global $post, $porto_settings;
					$post_layout = get_post_meta( $post->ID, 'post_layout', true );
					$post_layout = ( 'default' == $post_layout || ! $post_layout ) ? $porto_settings['post-content-layout'] : $post_layout;

					add_filter(
						'the_content',
						function() {
							global $post;
							return do_shortcode( $post->post_content );
						}
					);

					return get_template_part( 'content', 'post-' . $post_layout );
				}
				return '';
			},
		)
	);
	// Refresh custom styling / Colors etc.
	$wp_customize->selective_refresh->add_partial(
		'refresh_css_header',
		array(
			'selector'            => 'head > style#porto-style-inline-css',
			'container_inclusive' => false,
			'settings'            => array( 'porto_settings[logo-width]', 'porto_settings[logo-width-wide]', 'porto_settings[logo-width-tablet]', 'porto_settings[logo-width-mobile]', 'porto_settings[logo-width-sticky]', 'porto_settings[logo-overlay-width]', 'porto_settings[header-link-color]', 'porto_settings[header-top-border]', 'porto_settings[sticky-header-bg]', 'porto_settings[sticky-header-bg-gcolor]', 'porto_settings[sticky-header-opacity]', 'porto_settings[mainmenu-wrap-bg-color-sticky]', 'porto_settings[mainmenu-bg-color]', 'porto_settings[mainmenu-toplevel-link-color]', 'porto_settings[mainmenu-toplevel-hbg-color]', 'porto_settings[mainmenu-toplevel-padding1]', 'porto_settings[mainmenu-toplevel-padding2]', 'porto_settings[mainmenu-toplevel-padding3]', 'porto_settings[mainmenu-popup-top-border]', 'porto_settings[mainmenu-popup-bg-color]', 'porto_settings[mainmenu-popup-text-color]', 'porto_settings[mainmenu-popup-text-hbg-color]', 'porto_settings[mainmenu-toplevel-hbg-color]', 'porto_settings[breadcrumbs-bg]', 'porto_settings[footer-ribbon-bg-color]', 'porto_settings[switcher-hbg-color]', 'porto_settings[searchform-bg-color]', 'porto_settings[searchform-text-color]', 'porto_settings[quickview-color]', 'porto_settings[header-type-select]', 'porto_settings[header-type]', 'porto_settings[search-border-radius]', 'porto_settings[breadcrumbs-type]', 'porto_settings[body-bg-gradient]', 'porto_settings[header-wrap-bg-gradient]', 'porto_settings[header-bg-gradient]', 'porto_settings[content-bg-gradient]', 'porto_settings[content-bottom-bg-gradient]', 'porto_settings[breadcrumbs-bg-gradient]', 'porto_settings[footer-bg-gradient]', 'porto_settings[footer-main-bg-gradient]', 'porto_settings[footer-top-bg-gradient]', 'porto_settings[footer-bottom-bg-gradient]','porto_settings[search-layout]', 'porto_settings[menu-type]' ),
			'render_callback'     => function() {
				global $porto_dynamic_style;
				if ( $porto_dynamic_style ) {
					return $porto_dynamic_style->output_dynamic_styles( true );
				}
			},
		)
	);

}
add_action( 'customize_register', 'porto_customizer_refresh_partials' );
