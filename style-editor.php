<?php
/**
 * Porto: Gutenberg Editor Style
 *
 * @package porto
 * @since 5.0
 */

global $porto_settings;
$porto_settings_backup = $porto_settings;
$b                     = porto_check_theme_options();
$porto_settings        = $porto_settings_backup;

require_once( porto_lib . '/lib/color-lib.php' );
$portoColorLib = PortoColorLib::getInstance();


	$left_escaped  = 'left';
	$right_escaped = 'right';
	$rtl_escaped   = false;


$themeColors = array(
	'primary'    => $b['skin-color'],
	'secondary'  => $b['secondary-color'],
	'tertiary'   => $b['tertiary-color'],
	'quaternary' => $b['quaternary-color'],
	'dark'       => $b['dark-color'],
	'light'      => $b['light-color'],
);
?>
@media (min-width: 768px) {
	.wp-block { max-width: 800px }
	.wp-block[data-align=wide] { max-width: 1140px; }
}

@media (min-width: 1680px) {
	.wp-block { max-width: 1140px; }
}
.wp-block .wp-block { width: 100%; }
body .editor-styles-wrapper {
	font-family: <?php echo sanitize_text_field( $b['body-font']['font-family'] ); ?>, sans-serif;
	<?php if ( $b['body-font']['font-weight'] ) : ?>
		font-weight: <?php echo esc_html( $b['body-font']['font-weight'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['body-font']['font-size'] ) : ?>
		font-size: <?php echo esc_html( $b['body-font']['font-size'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['body-font']['line-height'] ) : ?>
		line-height: <?php echo esc_html( $b['body-font']['line-height'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['body-font']['letter-spacing'] ) : ?>
		letter-spacing: <?php echo esc_html( $b['body-font']['letter-spacing'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['body-font']['color'] ) : ?>
		color: <?php echo esc_html( $b['body-font']['color'] ); ?>;
	<?php endif; ?>
}
.editor-styles-wrapper h1 {
	<?php if ( $b['h1-font']['font-family'] ) : ?>
		font-family: <?php echo sanitize_text_field( $b['h1-font']['font-family'] ); ?>, sans-serif;
	<?php endif; ?>
	<?php if ( $b['h1-font']['font-weight'] ) : ?>
		font-weight: <?php echo esc_html( $b['h1-font']['font-weight'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['h1-font']['font-size'] ) : ?>
		font-size: <?php echo esc_html( $b['h1-font']['font-size'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['h1-font']['line-height'] ) : ?>
		line-height: <?php echo esc_html( $b['h1-font']['line-height'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['h1-font']['letter-spacing'] ) : ?>
		letter-spacing: <?php echo esc_html( $b['h1-font']['letter-spacing'] ); ?>;
	<?php endif; ?>
	<?php if ( $b['h1-font']['color'] ) : ?>
		color: <?php echo esc_html( $b['h1-font']['color'] ); ?>;
	<?php endif; ?>
}
<?php for ( $i = 2; $i <= 6; $i++ ) { ?>
	.editor-styles-wrapper h<?php echo (int) $i; ?> {
		<?php if ( $b[ 'h' . $i . '-font' ]['font-family'] ) : ?>
			font-family: <?php echo sanitize_text_field( $b[ 'h' . $i . '-font' ]['font-family'] ); ?>, sans-serif;
		<?php endif; ?>
		<?php if ( $b[ 'h' . $i . '-font' ]['font-weight'] ) : ?>
			font-weight: <?php echo esc_html( $b[ 'h' . $i . '-font' ]['font-weight'] ); ?>;
		<?php endif; ?>
		<?php if ( $b[ 'h' . $i . '-font' ]['font-size'] ) : ?>
			font-size: <?php echo esc_html( $b[ 'h' . $i . '-font' ]['font-size'] ); ?>;
		<?php endif; ?>
		<?php if ( $b[ 'h' . $i . '-font' ]['line-height'] ) : ?>
			line-height: <?php echo esc_html( $b[ 'h' . $i . '-font' ]['line-height'] ); ?>;
		<?php endif; ?>
		<?php if ( $b[ 'h' . $i . '-font' ]['letter-spacing'] ) : ?>
			letter-spacing: <?php echo esc_html( $b[ 'h' . $i . '-font' ]['letter-spacing'] ); ?>;
		<?php endif; ?>
		<?php if ( $b[ 'h' . $i . '-font' ]['color'] ) : ?>
			color: <?php echo esc_html( $b[ 'h' . $i . '-font' ]['color'] ); ?>;
		<?php endif; ?>
	}
<?php } ?>


body .editor-styles-wrapper p {
	font-size: 14px;
	<?php if ( isset($b['paragraph-font']['font-family']) ) : ?>
		font-family: <?php echo sanitize_text_field( isset($b['paragraph-font']['font-family']) ); ?>;
	<?php endif; ?>
	<?php if ( isset($b['paragraph-font']['letter-spacing']) ) : ?>
		letter-spacing: <?php echo esc_html( isset($b['paragraph-font']['letter-spacing']) ); ?>;
	<?php endif; ?>
}

.editor-styles-wrapper a {
	color: <?php echo esc_html( $b['skin-color'] ); ?>; text-decoration: none; pointer-events: none;
}

.editor-styles-wrapper .thumb-info {
	display: block;
	position: relative;
	text-decoration: none;
	max-width: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}
.editor-styles-wrapper .thumb-info .zoom {
	border-radius: 100%;
	bottom: 4px;
	cursor: pointer;
	color: #FFF;
	display: block;
	height: 30px;
	padding: 0;
	position: absolute;
	right: 4px;
	text-align: center;
	width: 30px;
	opacity: 0;
	transition: all 0.1s;
	z-index: 2;
}
.post-carousel h3 { font-size: 14px; }
.post-carousel .post-item, .widget .row .post-item-small { margin: 0 10px; }

.posts-container[class*="columns-"] { margin-top: 1.5em; margin-bottom: 1.5em; display: grid; grid-column-gap: 30px; grid-row-gap: 40px; }

.porto-blog .post { margin-bottom: 30px; }

.posts-container.columns-2 { grid-template-columns: 1fr 1fr; }
.posts-container.columns-3 { grid-template-columns: 1fr 1fr 1fr; }
.posts-container.columns-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
.posts-container.columns-5 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
.posts-container.columns-6 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }
.posts-container.columns-7 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }
.posts-container.columns-8 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; }


.products.list .product-image,
.posts-medium .post-medium .post-image,
.posts-medium-alt .post-medium-alt .post-image { float: left; width: 30%; margin-right: 20px; }
.products.list .product-col:after,
.posts-medium .post-medium { content: ''; display: table; clear: both; }
.posts-medium .post-medium .post-image,
.posts-medium-alt .post-medium-alt .post-image { margin-right: 20px; }
.posts-container .entry-title { margin-top: 2px; }

/*------ Screen Large Variable ------- */
.has-ccols .editor-block-list__layout { display: -ms-flexbox; display: flex; overflow: hidden; }
.ccols-1 .editor-block-list__layout > * { flex: 0 0 100%; width: 100%; }
.ccols-2 .editor-block-list__layout > * { flex: 0 0 50%; width: 50%; }
.ccols-3 .editor-block-list__layout > * { flex: 0 0 33.3333%; width: 33.3333%; }
.ccols-4 .editor-block-list__layout > * { flex: 0 0 25%; width: 25%; }
.ccols-5 .editor-block-list__layout > * { flex: 0 0 20%; width: 20%; }
.ccols-6 .editor-block-list__layout > * { flex: 0 0 16.6666%; width: 16.6666%; }
.ccols-7 .editor-block-list__layout > * { flex: 0 0 14.2857%; width: 14.2857%; }
.ccols-8 .editor-block-list__layout > * { flex: 0 0 12.5%; width: 12.5%; }

/* carousel */
.porto-carousel .wp-block-image .components-resizable-box__container { display: block; }

/* products */
.editor-styles-wrapper .products .product-col { text-align: center; }
.editor-styles-wrapper .products .product-add-to-cart { display: inline-block; margin-top: 10px; padding: 0 10px 0 9px; font-size: 12.5px; color: #6f6e6b; text-transform: uppercase; letter-spacing: 0.025em; height: 32px; line-height: 32px; border: 1px solid #f4f4f4; font-weight: 400; }
.editor-styles-wrapper .products h3 { font-size: 14px; font-weight: 400; }

/* posts */
.editor-styles-wrapper .post .read-more,
.editor-styles-wrapper .post-item .read-more { color: <?php echo esc_html( $b['dark-color'] ); ?>; font-size: .9em; font-weight: 600; }
.editor-styles-wrapper .btn.read-more { display: inline-block; padding: 0 10px; border-radius: 0; border: 1px solid rgba(0,0,0,0.09); border-bottom-color: rgba(0,0,0,.2); font-size: 10px; font-weight: 400; text-transform: uppercase; }
.blog-posts .post .entry-title { font-size: 1.5em; line-height: 1.3; font-weight: 600; margin-bottom: 1rem; }
.editor-styles-wrapper article.post .post-meta { font-size: .9em; margin-bottom: 8px; }
