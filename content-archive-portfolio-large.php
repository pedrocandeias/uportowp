<?php
global $porto_settings, $post, $porto_portfolio_thumb_bg, $porto_portfolio_thumb_image, $porto_portfolio_ajax_load, $porto_portfolio_ajax_modal;
$portfolio_layout = 'large';
$post_class       = array();
$post_class[]     = 'portfolio';
$post_class[]     = 'portfolio-' . $portfolio_layout;
$item_cats        = get_the_terms( $post->ID, 'portfolio_cat' );
if ( $item_cats ) :
	foreach ( $item_cats as $item_cat ) {
		$post_class[] = urldecode( $item_cat->slug );
	}
endif;


$archive_image = (int) get_post_meta( $post->ID, 'portfolio_archive_image', true );
if ( $archive_image ) {
	$featured_images   = array();
	$featured_image    = array(
		'thumb'         => wp_get_attachment_thumb_url( $archive_image ),
		'full'          => wp_get_attachment_url( $archive_image ),
		'attachment_id' => $archive_image,
	);
	$featured_images[] = $featured_image;
} else {
	$featured_images = porto_get_featured_images();
}
$portfolio_link = get_post_meta( $post->ID, 'portfolio_link', true );

$show_external_link        = $porto_settings['portfolio-external-link'];
$portfolio_thumb_bg        = $porto_portfolio_thumb_bg ? $porto_portfolio_thumb_bg : $porto_settings['portfolio-archive-thumb-bg'];
$portfolio_thumb_image     = $porto_portfolio_thumb_image ? ( 'zoom' == $porto_portfolio_thumb_image ? '' : $porto_portfolio_thumb_image ) : $porto_settings['portfolio-archive-thumb-image'];
$portfolio_show_link       = $porto_settings['portfolio-archive-link'];
$portfolio_show_all_images = $porto_settings['portfolio-archive-all-images'];
$portfolio_images_count    = $porto_settings['portfolio-archive-images-count'];
$portfolio_show_zoom       = $porto_settings['portfolio-archive-zoom'];
$portfolio_ajax            = $porto_settings['portfolio-archive-ajax'];
$portfolio_ajax_modal      = $porto_settings['portfolio-archive-ajax-modal'];

if ( 'yes' == $porto_portfolio_ajax_load ) {
	$portfolio_ajax = true;
} elseif ( 'no' == $porto_portfolio_ajax_load ) {
	$portfolio_ajax = false;
}

if ( 'yes' == $porto_portfolio_ajax_modal ) {
	$portfolio_ajax_modal = true;
} elseif ( 'no' == $porto_portfolio_ajax_modal ) {
	$portfolio_ajax_modal = false;
}

$options                    = array();
$options['margin']          = 10;
$options['animateOut']      = 'fadeOut';
$options['autoplay']        = true;
$options['autoplayTimeout'] = 3000;
$options                    = json_encode( $options );

$count = count( $featured_images );

$classes = array();
if ( $portfolio_thumb_bg ) {
	$classes[] = 'thumb-info-' . $portfolio_thumb_bg;
}

if ( $count > 1 && $portfolio_show_all_images ) {
	$classes[] = 'thumb-info-no-zoom';
} elseif ( $portfolio_thumb_image ) {
	$classes[] = 'thumb-info-' . $portfolio_thumb_image;
}

$ajax_attr_escaped = '';
if ( ! ( $show_external_link && $portfolio_link ) && $portfolio_ajax ) {
	$portfolio_show_zoom       = false;
	$portfolio_show_all_images = false;
	if ( $portfolio_ajax_modal ) {
		$ajax_attr_escaped = ' data-ajax-on-modal';
	} else {
		$ajax_attr_escaped = ' data-ajax-on-page';
	}
}

if ( $portfolio_show_zoom ) {
	$classes[] = 'thumb-info-centered-icons';
}

$class = implode( ' ', $classes );

$zoom_src   = array();
$zoom_title = array();

$portfolio_show_link_zoom = false;
if ( $porto_settings['portfolio-archive-link-zoom'] ) {
	$portfolio_show_link_zoom  = true;
	$portfolio_show_zoom       = false;
	$portfolio_show_link       = false;
	$portfolio_show_all_images = false;
}
if ( $ajax_attr_escaped ) {
	$portfolio_show_link_zoom = false;
}

?>

<article <?php post_class( $post_class ); ?>>
	<div class="row">
		<?php
		if ( $count ) :
			?>
		<div class="col-lg-6">
			<a class="portfolio-link" href="<?php
			if ( $portfolio_show_link_zoom ) {
				foreach ( $featured_images as $featured_image ) {
					$attachment_id = $featured_image['attachment_id'];
					$attachment    = porto_get_attachment( $attachment_id );
					if ( $attachment ) {
						echo esc_url( $attachment['src'] );
						break;
					}
				}
			} else {
				if ( $show_external_link && $portfolio_link ) {
					echo esc_url( $portfolio_link );
				} else {
					the_permalink();
				}
			}
			?>"<?php echo $ajax_attr_escaped; ?>>
				<span class="thumb-info m-b-xl <?php echo esc_attr( $class ); ?>">
					<span class="thumb-info-wrapper">
						<?php
						if ( $count > 1 && $portfolio_show_all_images ) :
							?>
							<div class="porto-carousel owl-carousel m-b-none nav-inside show-nav-hover" data-plugin-options="<?php echo esc_attr( $options ); ?>"><?php endif; ?>
							<?php
							$i = 0;
							foreach ( $featured_images as $featured_image ) :
								$attachment_id = $featured_image['attachment_id'];
								if ( ! isset( $image_size ) ) {
									$image_size = 'portfolio-large';
								}
								$attachment       = porto_get_attachment( $attachment_id );
								$attachment_large = porto_get_attachment( $attachment_id, $image_size );
								if ( $attachment && $attachment_large ) :
									$zoom_src[]   = $attachment['src'];
									$zoom_title[] = $attachment['caption'];
									?>
									<img class="img-responsive" width="<?php echo esc_attr( $attachment_large['width'] ); ?>" height="<?php echo esc_attr( $attachment_large['height'] ); ?>" src="<?php echo esc_url( $attachment_large['src'] ); ?>" alt="<?php echo esc_attr( $attachment_large['alt'] ); ?>" />
									<?php
									if ( ! $portfolio_show_all_images ) {
										break;
									}
									$i++;
									if ( $i >= $portfolio_images_count ) {
										break;
									}
								endif;
							endforeach;
							?>
						<?php
						if ( $count > 1 && $portfolio_show_all_images ) :
							?>
							</div><?php endif; ?>
						<?php if ( $portfolio_show_link || $portfolio_show_zoom ) : ?>
							<span class="thumb-info-action">
								<?php if ( $portfolio_show_link ) : ?>
									<span class="thumb-info-action-icon thumb-info-action-icon-primary"><i class="fa <?php echo ! $ajax_attr_escaped ? 'fa-link' : 'fa-plus-square'; ?>"></i></span>
								<?php endif; ?>
								<?php if ( $portfolio_show_zoom ) : ?>
									<span class="thumb-info-action-icon thumb-info-action-icon-light thumb-info-zoom" data-src="<?php echo esc_attr( json_encode( $zoom_src ) ); ?>" data-title="<?php echo esc_attr( json_encode( $zoom_title ) ); ?>"><i class="fa fa-search-plus"></i></span>
								<?php endif; ?>
							</span>
						<?php endif; ?>
						<?php
						if ( $portfolio_show_link_zoom ) :
							?>
							<span class="thumb-info-zoom" data-src="<?php echo esc_attr( json_encode( $zoom_src ) ); ?>" data-title="<?php echo esc_attr( json_encode( $zoom_title ) ); ?>"></span><?php endif; ?>
					</span>
				</span>
			</a>
		</div>
		<div class="col-lg-6">
		<?php else : ?>
		<div class="col-lg-12">
		<?php endif; ?>


			<div class="portfolio-info"<?php echo isset( $content_animation ) && $content_animation ? ' data-appear-animation="fadeIn" data-appear-animation-delay="600"' : ''; ?>>
				<ul>
					<?php if ( in_array( 'like', $porto_settings['portfolio-metas'] ) ) : ?>
						<li>
							<?php echo porto_portfolio_like(); ?>
						</li>
						<?php
					endif;
					if ( in_array( 'date', $porto_settings['portfolio-metas'] ) ) :
						?>
						<li>
							<i class="fa fa-calendar"></i> <?php echo get_the_date(); ?>
						</li>
						<?php
					endif;
					$cat_list_escaped = get_the_term_list( $post->ID, 'portfolio_cat', '', ', ', '' );
					if ( in_array( 'cats', $porto_settings['portfolio-metas'] ) && $cat_list_escaped ) :
						?>
						<li>
							<i class="fa fa-tags"></i> <?php echo $cat_list_escaped; ?>
						</li>
					<?php endif; ?>
					<?php
					if ( function_exists( 'Post_Views_Counter' ) && 'manual' == Post_Views_Counter()->options['display']['position'] && in_array( 'portfolio', (array) Post_Views_Counter()->options['general']['post_types_count'] ) ) {
						$post_count = do_shortcode( '[post-views]' );
						if ( $post_count ) :
							?>
							<li>
								<?php echo wp_kses_post( $post_count ); ?>
							</li>
							<?php
						endif;
					}
					?>
				</ul>
			</div>
		<?php
			$animation_attrs = isset( $content_animation ) && $content_animation ? ' data-appear-animation="' . esc_attr( $content_animation ) . '"' : '';
		if ( $ajax_attr_escaped || $portfolio_show_link_zoom ) :
			?>
				<h4 class="entry-title"<?php echo ! empty( $animation_attrs ) ? $animation_attrs . ' data-appear-animation-delay="600"' : ''; ?>><?php the_title(); ?></h4>
			<?php else : ?>
				<h4 class="entry-title"<?php echo ! empty( $animation_attrs ) ? $animation_attrs . ' data-appear-animation-delay="600"' : ''; ?>><a href="<?php echo ! $show_external_link || ! $portfolio_link ? get_the_permalink() : esc_url( $portfolio_link ); ?>"><?php the_title(); ?></a></h4>
			<?php endif; ?>

			<?php if ( $porto_settings['portfolio-show-content'] ) : ?>
				<div class="m-t-md"<?php echo ! empty( $animation_attrs ) ? $animation_attrs . ' data-appear-animation-delay="800"' : ''; ?>>
				<?php
				porto_render_rich_snippets( false );
				if ( $porto_settings['portfolio-excerpt'] ) {
					if ( has_excerpt() ) {
						the_excerpt();
					} else {
						echo porto_get_excerpt( $porto_settings['portfolio-excerpt-length'], false );
					}
				} else {
					echo '<div class="entry-content">';
					porto_the_content();
					wp_link_pages(
						array(
							'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'porto' ) . '</span>',
							'after'       => '</div>',
							'link_before' => '<span>',
							'link_after'  => '</span>',
							'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', 'porto' ) . ' </span>%',
							'separator'   => '<span class="screen-reader-text">, </span>',
						)
					);
					echo '</div>';
				}
				?>
				</div>
			<?php endif; ?>
			<?php if ( $animation_attrs ) : ?>
				<div<?php echo ! empty( $animation_attrs ) ? $animation_attrs . ' data-appear-animation-delay="1200"' : ''; ?>>
			<?php endif; ?>
			<?php porto_get_template_part( 'views/portfolios/meta' ); ?>
			<?php if ( $animation_attrs ) : ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</article>
