<?php
/**
 * Generates dynamic css styles for only special pages or post types
 * @package Porto
 * @author P-Themes
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $porto_settings, $porto_product_layout, $porto_layout;

$porto_settings_backup = $porto_settings;
$b                     = porto_check_theme_options();
$porto_settings        = $porto_settings_backup;
$left  = 'left';
$right = 'right';
$rtl   = false;


if ( ! isset( $porto_layout ) ) {
	$porto_layout = porto_meta_layout();
	$porto_layout = $porto_layout[0];
}
$body_type                     = porto_get_wrapper_type();
$is_wide                       = ( 'wide' == $body_type || porto_is_wide_layout() );
$body_mobile_font_size_scale   = ( 0 == (float) $b['body-font']['font-size'] || 0 == (float) $b['body-mobile-font']['font-size'] ) ? 1 : ( (float) $b['body-mobile-font']['font-size'] / (float) $b['body-font']['font-size'] );
$body_mobile_line_height_scale = ( 0 == (float) $b['body-font']['line-height'] || 0 == (float) $b['body-mobile-font']['line-height'] ) ? 1 : ( (float) $b['body-mobile-font']['line-height'] / (float) $b['body-font']['line-height'] );

/* logo css */
if ( ! isset( $porto_settings['logo-type'] ) || 'text' != $porto_settings['logo-type'] ) :
	$logo_width        = ( isset( $porto_settings['logo-width'] ) && (int) $porto_settings['logo-width'] ) ? (int) $porto_settings['logo-width'] : 170;
	$logo_width_wide   = ( isset( $porto_settings['logo-width-wide'] ) && (int) $porto_settings['logo-width-wide'] ) ? (int) $porto_settings['logo-width-wide'] : 250;
	$logo_width_tablet = ( isset( $porto_settings['logo-width-tablet'] ) && (int) $porto_settings['logo-width-tablet'] ) ? (int) $porto_settings['logo-width-tablet'] : 110;
	$logo_width_mobile = ( isset( $porto_settings['logo-width-mobile'] ) && (int) $porto_settings['logo-width-mobile'] ) ? (int) $porto_settings['logo-width-mobile'] : 110;
	$logo_width_sticky = ( isset( $porto_settings['logo-width-sticky'] ) && (int) $porto_settings['logo-width-sticky'] ) ? (int) $porto_settings['logo-width-sticky'] : 80;
	?>
	#header .logo,
	.side-header-narrow-bar-logo { max-width: <?php echo esc_html( $logo_width ); ?>px; }
	@media (min-width: <?php echo esc_html( $porto_settings['container-width'] + $porto_settings['grid-gutter-width'] ); ?>px) {
		#header .logo { max-width: <?php echo esc_html( $logo_width_wide ); ?>px; }
	}
	@media (max-width: 991px) {
		#header .logo { max-width: <?php echo esc_html( $logo_width_tablet ); ?>px; }
	}
	@media (max-width: 767px) {
		#header .logo { max-width: <?php echo esc_html( $logo_width_mobile ); ?>px; }
	}
	<?php if ( $b['change-header-logo'] ) : ?>
		#header.sticky-header .logo { width: <?php echo esc_html( $logo_width_sticky * 1.25 ); ?>px; }
	<?php endif; ?>
	<?php
endif;

/* loading overlay */
$loading_overlay = porto_get_meta_value( 'loading_overlay' );
if ( 'no' !== $loading_overlay && ( 'yes' === $loading_overlay || ( 'yes' !== $loading_overlay && $b['show-loading-overlay'] ) ) ) :
	?>
	/* Loading Overlay */
	/*.loading-overlay-showing { overflow-x: hidden; }*/
	.loading-overlay-showing > .loading-overlay { opacity: 1; visibility: visible; transition-delay: 0; }
	.loading-overlay { transition: visibility 0s ease-in-out 0.5s, opacity 0.5s ease-in-out; position: absolute; bottom: 0; left: 0; opacity: 0; right: 0; top: 0; visibility: hidden; }
	.loading-overlay .loader { display: inline-block; border: 2px solid transparent; width: 40px; height: 40px; -webkit-animation: spin 0.75s infinite linear; animation: spin 0.75s infinite linear; border-image: none; border-radius: 50%; vertical-align: middle; position: absolute; margin: auto; left: 0; right: 0; top: 0; bottom: 0; z-index: 2; border-top-color: <?php echo esc_html( $b['skin-color'] ); ?>; }
	.loading-overlay .loader:before { content: ""; display: inline-block; border: inherit; width: inherit; height: inherit; -webkit-animation: spin 1.5s infinite ease; animation: spin 1.5s infinite ease; border-radius: inherit; position: absolute; left: -2px; top: -2px; border-top-color: inherit; }
	body > .loading-overlay { position: fixed; z-index: 999999; }
	<?php
endif;

/* header */
?>
<?php if ( $b['header-top-border']['border-top'] && '0px' != $b['header-top-border']['border-top'] ) : ?>
	#header,
	.sticky-header .header-main.sticky { border-top: <?php echo esc_html( $b['header-top-border']['border-top'] ); ?> solid <?php echo esc_html( $b['header-top-border']['border-color'] ); ?> }
<?php endif; ?>
@media (min-width: 992px) {
	<?php
	if ( $b['header-margin']['margin-top'] || $b['header-margin']['margin-bottom'] || $b['header-margin']['margin-left'] || $b['header-margin']['margin-right'] ) :
		?>
		#header { margin: <?php echo porto_config_value( $b['header-margin']['margin-top'] ); ?>px <?php echo porto_config_value( $b['header-margin']['margin-right'] ); ?>px <?php echo porto_config_value( $b['header-margin']['margin-bottom'] ); ?>px <?php echo porto_config_value( $b['header-margin']['margin-left'] ); ?>px; }
	<?php endif; ?>
	<?php if ( $b['header-margin']['margin-top'] && $b['logo-overlay'] && $b['logo-overlay']['url'] ) : ?>
		#header.logo-overlay-header .overlay-logo { top: -<?php echo esc_html( $b['header-margin']['margin-top'] ); ?>px }
		#header.logo-overlay-header.sticky-header .overlay-logo { top: -<?php echo (int) $b['header-margin']['margin-top'] + 90; ?>px }
	<?php endif; ?>
}

<?php if ( isset( $porto_settings['logo-type'] ) && 'text' == $porto_settings['logo-type'] ) : ?>
	@media (max-width: 575px) {
		#header .logo-text { font-size: <?php echo (float) $b['logo-font']['font-size'] * $body_mobile_font_size_scale; ?>px; line-height: <?php echo (float) $b['logo-font']['line-height'] * $body_mobile_line_height_scale; ?>px; }
	}
<?php endif; ?>

<?php if ( isset( $porto_settings['header-main-padding-mobile'] ) && ( $porto_settings['header-main-padding-mobile']['padding-top'] || $porto_settings['header-main-padding-mobile']['padding-bottom'] ) ) : ?>
	@media (max-width: 991px) {
		#header .header-main .header-left,
		#header .header-main .header-center,
		#header .header-main .header-right,
		.fixed-header #header .header-main .header-left,
		.fixed-header #header .header-main .header-right,
		.fixed-header #header .header-main .header-center { padding-top: <?php echo esc_html( $porto_settings['header-main-padding-mobile']['padding-top'] ); ?>px; padding-bottom: <?php echo esc_html( $porto_settings['header-main-padding-mobile']['padding-bottom'] ); ?>px }
	}
<?php endif; ?>

/* breadcrumb type */
<?php
	$blog_id          = (int) porto_get_blog_id();
	$page_header_type = porto_get_meta_value( 'porto_page_header_shortcode_type' );
	$page_header_type = $page_header_type ? $page_header_type : porto_get_meta_value( 'breadcrumbs_type' );
if ( defined( 'PORTO_DEMO' ) && PORTO_DEMO && ( $blog_id <= 20 && 18 != $blog_id ) && ! $page_header_type && 'fixed' != $b['header-view'] && ( is_singular( 'post' ) || is_singular( 'portfolio' ) || is_home() || is_archive() || is_post_type_archive( 'portfolio' ) || ( function_exists( 'is_porto_portfolios_page' ) && is_porto_portfolios_page() ) || ( is_page() && porto_portfolios_page_id() && porto_portfolios_page_id() == wp_get_post_parent_id( get_the_ID() ) ) || ( is_page() && get_option( 'page_for_posts' ) == wp_get_post_parent_id( get_the_ID() ) ) || 'portfolio' == get_post_type() ) ) {
	$page_header_type                   = '7';
	$porto_settings['breadcrumbs-type'] = '7';
	echo '.page-wrapper .page-top { background-color: #f7f7f7; border-bottom: none; padding: 40px 0; }';
	echo '.page-wrapper .page-top .page-title { color: #212529; font-size: 35px; font-weight: 700; }';
	echo '.page-wrapper .page-top .page-sub-title { color: #212529; }';
	echo '.page-wrapper .page-top .breadcrumbs-wrap { color: #777; }';
	echo '.page-wrapper .page-top .breadcrumbs-wrap a { color: ' . $b['skin-color'] . ' }';
} else {
	$page_header_type = $page_header_type ? $page_header_type : ( $porto_settings['breadcrumbs-type'] ? $porto_settings['breadcrumbs-type'] : '1' );
}
?>
<?php if ( 1 === (int) $page_header_type ) : ?>
	.page-top .page-title-wrap { line-height: 0; }
	.page-top .page-title:not(.b-none):after {content: '';position: absolute;width: 100%;left: 0;border-bottom: <?php echo esc_html( $b['breadcrumbs-bottom-border']['border-top'] ); ?> solid <?php echo esc_html( $b['skin-color'] ); ?>;bottom: -<?php echo porto_config_value( $b['breadcrumbs-padding']['padding-bottom'] ) +((int) preg_replace('/\D/', '', porto_config_value( $b['breadcrumbs-bottom-border']['border-top']))) + 12; ?>px;
	}>
<?php elseif ( 3 === (int) $page_header_type || 4 === (int) $page_header_type || 5 === (int) $page_header_type || 7 === (int) $page_header_type ) : ?>
	.page-top .sort-source { position: static; text-align: center; margin-top: 5px; border-width: 0; }
	<?php if ( 3 === (int) $page_header_type || 7 === (int) $page_header_type ) : ?>
		.page-top ul.breadcrumb { -webkit-justify-content: center; -ms-justify-content: center; justify-content: center; -ms-flex-pack: center; }
		.page-top .page-title { font-weight: 700; }
	<?php endif; ?>
<?php endif; ?>
<?php if ( 4 === (int) $page_header_type || 5 === (int) $page_header_type ) : ?>
	.page-top { padding-top: 20px; padding-bottom: 20px; }
	.page-top .page-title { padding-bottom: 0; }
	@media (max-width: 991px) {
		.page-top .page-sub-title { margin-bottom: 5px; margin-top: 0; }
		.page-top .breadcrumbs-wrap { margin-bottom: 5px; }
	}
	@media (min-width: 992px) {
		.page-top .page-title { min-height: 0; line-height: 1.25; }
		.page-top .page-sub-title { line-height: 1.6; }
	}
<?php endif; ?>
<?php if ( 4 === (int) $page_header_type ) : ?>
	@media (min-width: 992px) {
		.page-top .breadcrumb { -webkit-justify-content: flex-end; -ms-justify-content: flex-end; justify-content: flex-end; -ms-flex-pack: end; }
	}
<?php elseif ( 6 === (int) $page_header_type ) : ?>
	.page-top ul.breadcrumb > li.home { display: inline-block; }
	.page-top ul.breadcrumb > li.home a { position: relative; width: 14px; text-indent: -9999px; }
	.page-top ul.breadcrumb > li.home a:after { content: "\e883"; font-family: 'porto'; position: absolute; <?php echo porto_filter_output( $left ); ?>: 0; top: 0; text-indent: 0; }
<?php endif; ?>
/* sidebar width */
<?php if ( $is_wide ) : ?>
	@media (min-width: 1500px) {
		.left-sidebar.col-lg-3,
		.right-sidebar.col-lg-3 { -webkit-flex: 0 0 20%; -ms-flex: 0 0 20%; flex: 0 0 20%; max-width: 20%; }
		.main-content.col-lg-9 { -webkit-flex: 0 0 80%; -ms-flex: 0 0 80%; flex: 0 0 80%; max-width: 80%; }
	}
	<?php
endif;


/* skin options */
$body_bg_color      = porto_get_meta_value( 'body_bg_color' );
$body_bg_image      = porto_get_meta_value( 'body_bg_image' );
$body_bg_repeat     = porto_get_meta_value( 'body_bg_repeat' );
$body_bg_size       = porto_get_meta_value( 'body_bg_size' );
$body_bg_attachment = porto_get_meta_value( 'body_bg_attachment' );
$body_bg_position   = porto_get_meta_value( 'body_bg_position' );

$page_bg_color      = porto_get_meta_value( 'page_bg_color' );
$page_bg_image      = porto_get_meta_value( 'page_bg_image' );
$page_bg_repeat     = porto_get_meta_value( 'page_bg_repeat' );
$page_bg_size       = porto_get_meta_value( 'page_bg_size' );
$page_bg_attachment = porto_get_meta_value( 'page_bg_attachment' );
$page_bg_position   = porto_get_meta_value( 'page_bg_position' );

$content_bottom_bg_color      = porto_get_meta_value( 'content_bottom_bg_color' );
$content_bottom_bg_image      = porto_get_meta_value( 'content_bottom_bg_image' );
$content_bottom_bg_repeat     = porto_get_meta_value( 'content_bottom_bg_repeat' );
$content_bottom_bg_size       = porto_get_meta_value( 'content_bottom_bg_size' );
$content_bottom_bg_attachment = porto_get_meta_value( 'content_bottom_bg_attachment' );
$content_bottom_bg_position   = porto_get_meta_value( 'content_bottom_bg_position' );

$header_bg_color      = porto_get_meta_value( 'header_bg_color' );
$header_bg_image      = porto_get_meta_value( 'header_bg_image' );
$header_bg_repeat     = porto_get_meta_value( 'header_bg_repeat' );
$header_bg_size       = porto_get_meta_value( 'header_bg_size' );
$header_bg_attachment = porto_get_meta_value( 'header_bg_attachment' );
$header_bg_position   = porto_get_meta_value( 'header_bg_position' );

$sticky_header_bg_color      = porto_get_meta_value( 'sticky_header_bg_color' );
$sticky_header_bg_image      = porto_get_meta_value( 'sticky_header_bg_image' );
$sticky_header_bg_repeat     = porto_get_meta_value( 'sticky_header_bg_repeat' );
$sticky_header_bg_size       = porto_get_meta_value( 'sticky_header_bg_size' );
$sticky_header_bg_attachment = porto_get_meta_value( 'sticky_header_bg_attachment' );
$sticky_header_bg_position   = porto_get_meta_value( 'sticky_header_bg_position' );

$footer_top_bg_color      = porto_get_meta_value( 'footer_top_bg_color' );
$footer_top_bg_image      = porto_get_meta_value( 'footer_top_bg_image' );
$footer_top_bg_repeat     = porto_get_meta_value( 'footer_top_bg_repeat' );
$footer_top_bg_size       = porto_get_meta_value( 'footer_top_bg_size' );
$footer_top_bg_attachment = porto_get_meta_value( 'footer_top_bg_attachment' );
$footer_top_bg_position   = porto_get_meta_value( 'footer_top_bg_position' );

$footer_bg_color      = porto_get_meta_value( 'footer_bg_color' );
$footer_bg_image      = porto_get_meta_value( 'footer_bg_image' );
$footer_bg_repeat     = porto_get_meta_value( 'footer_bg_repeat' );
$footer_bg_size       = porto_get_meta_value( 'footer_bg_size' );
$footer_bg_attachment = porto_get_meta_value( 'footer_bg_attachment' );
$footer_bg_position   = porto_get_meta_value( 'footer_bg_position' );

$footer_main_bg_color      = porto_get_meta_value( 'footer_main_bg_color' );
$footer_main_bg_image      = porto_get_meta_value( 'footer_main_bg_image' );
$footer_main_bg_repeat     = porto_get_meta_value( 'footer_main_bg_repeat' );
$footer_main_bg_size       = porto_get_meta_value( 'footer_main_bg_size' );
$footer_main_bg_attachment = porto_get_meta_value( 'footer_main_bg_attachment' );
$footer_main_bg_position   = porto_get_meta_value( 'footer_main_bg_position' );

$footer_bottom_bg_color      = porto_get_meta_value( 'footer_bottom_bg_color' );
$footer_bottom_bg_image      = porto_get_meta_value( 'footer_bottom_bg_image' );
$footer_bottom_bg_repeat     = porto_get_meta_value( 'footer_bottom_bg_repeat' );
$footer_bottom_bg_size       = porto_get_meta_value( 'footer_bottom_bg_size' );
$footer_bottom_bg_attachment = porto_get_meta_value( 'footer_bottom_bg_attachment' );
$footer_bottom_bg_position   = porto_get_meta_value( 'footer_bottom_bg_position' );

$breadcrumbs_bg_color      = porto_get_meta_value( 'breadcrumbs_bg_color' );
$breadcrumbs_bg_image      = porto_get_meta_value( 'breadcrumbs_bg_image' );
$breadcrumbs_bg_repeat     = porto_get_meta_value( 'breadcrumbs_bg_repeat' );
$breadcrumbs_bg_size       = porto_get_meta_value( 'breadcrumbs_bg_size' );
$breadcrumbs_bg_attachment = porto_get_meta_value( 'breadcrumbs_bg_attachment' );
$breadcrumbs_bg_position   = porto_get_meta_value( 'breadcrumbs_bg_position' );

if ( $body_bg_color || $body_bg_image || $body_bg_repeat || $body_bg_size || $body_bg_attachment || $body_bg_position
	|| $page_bg_color || $page_bg_image || $page_bg_repeat || $page_bg_size || $page_bg_attachment || $page_bg_position
	|| $content_bottom_bg_color || $content_bottom_bg_image || $content_bottom_bg_repeat || $content_bottom_bg_size || $content_bottom_bg_attachment || $content_bottom_bg_position
	|| $header_bg_color || $header_bg_image || $header_bg_repeat || $header_bg_size || $header_bg_attachment || $header_bg_position
	|| $sticky_header_bg_color || $sticky_header_bg_image || $sticky_header_bg_repeat || $sticky_header_bg_size || $sticky_header_bg_attachment || $sticky_header_bg_position
	|| $footer_top_bg_color || $footer_top_bg_image || $footer_top_bg_repeat || $footer_top_bg_size || $footer_top_bg_attachment || $footer_top_bg_position
	|| $footer_bg_color || $footer_bg_image || $footer_bg_repeat || $footer_bg_size || $footer_bg_attachment || $footer_bg_position
	|| $footer_main_bg_color || $footer_main_bg_image || $footer_main_bg_repeat || $footer_main_bg_size || $footer_main_bg_attachment || $footer_main_bg_position
	|| $footer_bottom_bg_color || $footer_bottom_bg_image || $footer_bottom_bg_repeat || $footer_bottom_bg_size || $footer_bottom_bg_attachment || $footer_bottom_bg_position
	|| $breadcrumbs_bg_color || $breadcrumbs_bg_image || $breadcrumbs_bg_repeat || $breadcrumbs_bg_size || $breadcrumbs_bg_attachment || $breadcrumbs_bg_position ) :
	?>
	<?php
	if ( $body_bg_color || $body_bg_image || $body_bg_repeat || $body_bg_size || $body_bg_attachment || $body_bg_position ) :
		?>
	body {
		<?php
		if ( $body_bg_color ) :
			?>
		background-color: <?php echo esc_html( $body_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $body_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $body_bg_image ) :
			?>
		background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $body_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $body_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $body_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $body_bg_size ) :
			?>
		background-size: <?php echo esc_html( $body_bg_size ); ?> !important;
			<?php
		endif;
		if ( $body_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $body_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $body_bg_position ) :
			?>
		background-position: <?php echo esc_html( $body_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $page_bg_color || $page_bg_image || $page_bg_repeat || $page_bg_size || $page_bg_attachment || $page_bg_position ) :
		?>
	#main {
		<?php
		if ( $page_bg_color ) :
			?>
		background-color: <?php echo esc_html( $page_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $page_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $page_bg_image ) :
			?>
			background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $page_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $page_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $page_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $page_bg_size ) :
			?>
		background-size: <?php echo esc_html( $page_bg_size ); ?> !important;
			<?php
		endif;
		if ( $page_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $page_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $page_bg_position ) :
			?>
		background-position: <?php echo esc_html( $page_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
		if ( 'transparent' == $page_bg_color ) :
			?>
		.page-content { margin-left: -<?php echo esc_html( $porto_settings['grid-gutter-width'] / 2 ); ?>px; margin-right: -<?php echo esc_html( $porto_settings['grid-gutter-width'] / 2 ); ?>px;} .main-content { padding-bottom: 0 !important; } .left-sidebar, .right-sidebar, .wide-left-sidebar, .wide-right-sidebar { padding-top: 0 !important; padding-bottom: 0 !important; margin: 0; }
			<?php
		endif;
	endif;
	if ( $content_bottom_bg_color || $content_bottom_bg_image || $content_bottom_bg_repeat || $content_bottom_bg_size || $content_bottom_bg_attachment || $content_bottom_bg_position ) :
		?>
	#main .content-bottom-wrapper {
		<?php
		if ( $content_bottom_bg_color ) :
			?>
		background-color: <?php echo esc_html( $content_bottom_bg_color ); ?> !important;
			<?php
			endif;
		if ( 'none' == $content_bottom_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $content_bottom_bg_image ) :
			?>
			background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $content_bottom_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $content_bottom_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $content_bottom_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $content_bottom_bg_size ) :
			?>
		background-size: <?php echo esc_html( $content_bottom_bg_size ); ?> !important;
			<?php
		endif;
		if ( $content_bottom_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $content_bottom_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $content_bottom_bg_position ) :
			?>
		background-position: <?php echo esc_html( $content_bottom_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $header_bg_color || $header_bg_image || $header_bg_repeat || $header_bg_size || $header_bg_attachment || $header_bg_position ) :
		?>
	#header, .fixed-header #header {
		<?php
		if ( $header_bg_color ) :
			?>
		background-color: <?php echo esc_html( $header_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $header_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $header_bg_image ) :
			?>
			background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $header_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $header_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $header_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $header_bg_size ) :
			?>
		background-size: <?php echo esc_html( $header_bg_size ); ?> !important;
			<?php
		endif;
		if ( $header_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $header_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $header_bg_position ) :
			?>
		background-position: <?php echo esc_html( $header_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $sticky_header_bg_color || $sticky_header_bg_image || $sticky_header_bg_repeat || $sticky_header_bg_size || $sticky_header_bg_attachment || $sticky_header_bg_position ) :
		?>
	#header.sticky-header, .fixed-header #header.sticky-header {
		<?php
		if ( $sticky_header_bg_color ) :
			?>
		background-color: <?php echo esc_html( $sticky_header_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $sticky_header_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $sticky_header_bg_image ) :
			?>
			background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $sticky_header_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $sticky_header_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $sticky_header_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $sticky_header_bg_size ) :
			?>
		background-size: <?php echo esc_html( $sticky_header_bg_size ); ?> !important;
			<?php
		endif;
		if ( $sticky_header_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $sticky_header_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $sticky_header_bg_position ) :
			?>
		background-position: <?php echo esc_html( $sticky_header_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $footer_top_bg_color || $footer_top_bg_image || $footer_top_bg_repeat || $footer_top_bg_size || $footer_top_bg_attachment || $footer_top_bg_position ) :
		?>
	.footer-top {
		<?php
		if ( $footer_top_bg_color ) :
			?>
		background-color: <?php echo esc_html( $footer_top_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $footer_top_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $footer_top_bg_image ) :
			?>
			background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $footer_top_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $footer_top_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $footer_top_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $footer_top_bg_size ) :
			?>
		background-size: <?php echo esc_html( $footer_top_bg_size ); ?> !important;
			<?php
		endif;
		if ( $footer_top_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $footer_top_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $footer_top_bg_position ) :
			?>
		background-position: <?php echo esc_html( $footer_top_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $footer_bg_color || $footer_bg_image || $footer_bg_repeat || $footer_bg_size || $footer_bg_attachment || $footer_bg_position ) :
		?>
	#footer {
		<?php
		if ( $footer_bg_color ) :
			?>
		background-color: <?php echo esc_html( $footer_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $footer_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $footer_bg_image ) :
			?>
		background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $footer_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $footer_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $footer_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $footer_bg_size ) :
			?>
		background-size: <?php echo esc_html( $footer_bg_size ); ?> !important;
			<?php
		endif;
		if ( $footer_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $footer_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $footer_bg_position ) :
			?>
		background-position: <?php echo esc_html( $footer_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $footer_main_bg_color || $footer_main_bg_image || $footer_main_bg_repeat || $footer_main_bg_size || $footer_main_bg_attachment || $footer_main_bg_position ) :
		?>
	#footer .footer-main {
		<?php
		if ( $footer_main_bg_color ) :
			?>
		background-color: <?php echo esc_html( $footer_main_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $footer_main_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $footer_main_bg_image ) :
			?>
		background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $footer_main_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $footer_main_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $footer_main_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $footer_main_bg_size ) :
			?>
		background-size: <?php echo esc_html( $footer_main_bg_size ); ?> !important;
			<?php
		endif;
		if ( $footer_main_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $footer_main_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $footer_main_bg_position ) :
			?>
		background-position: <?php echo esc_html( $footer_main_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $footer_bottom_bg_color || $footer_bottom_bg_image || $footer_bottom_bg_repeat || $footer_bottom_bg_size || $footer_bottom_bg_attachment || $footer_bottom_bg_position ) :
		?>
	#footer .footer-bottom, .footer-wrapper.fixed #footer .footer-bottom {
		<?php
		if ( $footer_bottom_bg_color ) :
			?>
		background-color: <?php echo esc_html( $footer_bottom_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $footer_bottom_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $footer_bottom_bg_image ) :
			?>
		background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $footer_bottom_bg_image ) ); ?>') !important;
			<?php
		endif;
		if ( $footer_bottom_bg_repeat ) :
			?>
		background-repeat: <?php echo esc_html( $footer_bottom_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $footer_bottom_bg_size ) :
			?>
		background-size: <?php echo esc_html( $footer_bottom_bg_size ); ?> !important;
			<?php
		endif;
		if ( $footer_bottom_bg_attachment ) :
			?>
		background-attachment: <?php echo esc_html( $footer_bottom_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $footer_bottom_bg_position ) :
			?>
		background-position: <?php echo esc_html( $footer_bottom_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
	if ( $breadcrumbs_bg_color || $breadcrumbs_bg_image || $breadcrumbs_bg_repeat || $breadcrumbs_bg_size || $breadcrumbs_bg_attachment || $breadcrumbs_bg_position ) :
		?>
	.page-top {
		<?php
		if ( $breadcrumbs_bg_color ) :
			?>
		background-color: <?php echo esc_html( $breadcrumbs_bg_color ); ?> !important;
			<?php
		endif;
		if ( 'none' == $breadcrumbs_bg_image ) :
			echo 'background-image: none !important';
		elseif ( $breadcrumbs_bg_image ) :
			?>
		background-image: url('<?php echo esc_url( str_replace( array( 'http://', 'https://' ), array( '//', '//' ), $breadcrumbs_bg_image ) ); ?>') !important;
					<?php
		endif;
		if ( $breadcrumbs_bg_repeat ) :
			?>
	background-repeat: <?php echo esc_html( $breadcrumbs_bg_repeat ); ?> !important;
			<?php
		endif;
		if ( $breadcrumbs_bg_size ) :
			?>
	background-size: <?php echo esc_html( $breadcrumbs_bg_size ); ?> !important;
			<?php
		endif;
		if ( $breadcrumbs_bg_attachment ) :
			?>
	background-attachment: <?php echo esc_html( $breadcrumbs_bg_attachment ); ?> !important;
			<?php
		endif;
		if ( $breadcrumbs_bg_position ) :
			?>
	background-position: <?php echo esc_html( $breadcrumbs_bg_position ); ?> !important;
			<?php
		endif;
		?>
	}
		<?php
	endif;
endif;

if ( isset( $b['mainmenu-toplevel-link-color-sticky'] ) && $b['mainmenu-toplevel-link-color-sticky'] ) :
	if ( isset( $b['mainmenu-toplevel-link-color-sticky']['regular'] ) && $b['mainmenu-toplevel-link-color-sticky']['regular'] ) :
		?>
		#header.sticky-header .main-menu > li.menu-item > a,
		#header.sticky-header .main-menu > li.menu-custom-content a { color: <?php echo esc_html( $b['mainmenu-toplevel-link-color-sticky']['regular'] ); ?> }
		<?php
	endif;
	if ( isset( $b['mainmenu-toplevel-link-color-sticky']['hover'] ) && $b['mainmenu-toplevel-link-color-sticky']['hover'] ) :
		?>
		#header.sticky-header .main-menu > li.menu-item:hover > a,
		#header.sticky-header .main-menu > li.menu-item.active:hover > a,
		#header.sticky-header .main-menu > li.menu-custom-content:hover a { color: <?php echo esc_html( $b['mainmenu-toplevel-link-color-sticky']['hover'] ); ?> }
		<?php
	endif;
	if ( isset( $b['mainmenu-toplevel-link-color-sticky']['active'] ) && $b['mainmenu-toplevel-link-color-sticky']['active'] ) :
		?>
		#header.sticky-header .main-menu > li.menu-item.active > a,
		#header.sticky-header .main-menu > li.menu-custom-content.active a { color: <?php echo esc_html( $b['mainmenu-toplevel-link-color-sticky']['active'] ); ?> }
		<?php
	endif;
endif;

/* single post */
if ( is_singular( 'post' ) ) :
	$post_layout = get_post_meta( get_the_ID(), 'post_layout', true );
	$post_layout = ( 'default' == $post_layout || ! $post_layout ) ? $porto_settings['post-content-layout'] : $post_layout;
endif;

/* header builder custom css */
if ( ! is_customize_preview() && ! porto_header_type_is_preset() ) {
	$current_layout = porto_header_builder_layout();
	if ( isset( $current_layout['custom_css'] ) && $current_layout['custom_css'] ) {
		echo trim( preg_replace( '#<style[^>]*>(.*)</style>#is', '$1', $current_layout['custom_css'] ) );
	}
}

/* custom css */
$theme_options_custom_css = $porto_settings['css-code'];
$custom_css               = porto_get_meta_value( 'custom_css' );
if ( $theme_options_custom_css ) {
	echo trim( preg_replace( '#<style[^>]*>(.*)</style>#is', '$1', $theme_options_custom_css ) );
}
if ( ! empty( $custom_css ) ) {
	echo trim( preg_replace( '#<style[^>]*>(.*)</style>#is', '$1', $custom_css ) );
}
