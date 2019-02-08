<?php
global $porto_settings, $page_share;

$post_layout = 'grid';

$columns = $porto_settings['grid-columns'];

global $porto_blog_columns, $porto_post_style;
if ( $porto_blog_columns ) {
	$columns = $porto_blog_columns;
}

$post_style   = $porto_post_style ? $porto_post_style : $porto_settings['post-style'];
$post_class   = array();
$post_class[] = 'post post-' . $post_layout;

if ( porto_is_wide_layout() ) {
	if ( (int) $columns >= 5 ) {
		$image_size = 'blog-grid-small';
	} elseif ( (int) $columns >= 3 ) {
		$image_size = 'blog-grid';
	} else {
		$image_size = 'blog-large';
	}
} else {
	if ( (int) $columns >= 3 ) {
		$image_size = 'blog-grid-small';
	} elseif ( 1 === (int) $columns ) {
		$image_size = 'blog-large';
	} else {
		$image_size = 'blog-grid';
	}
}

switch ( $columns ) {
	case '1':
		$post_class[] = 'col-md-12';
		break;
	case '2':
		$post_class[] = 'col-md-6';
		break;
	case '3':
		$post_class[] = 'col-md-6 col-lg-4';
		break;
	case '4':
		$post_class[] = 'col-md-6 col-lg-4 col-xl-3';
		break;
	case '5':
		$post_class[] = 'col-sm-6 col-md-4 col-lg-3 col-xl-1-5';
		break;
	case '6':
		$post_class[] = 'col-6 col-md-4 col-lg-3 col-xl-2';
		break;
	default:
		$post_class[] = 'col-md-6 col-lg-4';
		break;
}
if ( 'without-icon' == $porto_settings['post-title-style'] ) {
	$post_class[] = 'post-title-simple';
}

$post_share = get_post_meta( $post->ID, 'post_share', true );

$social_share = true;
if ( ! $porto_settings['share-enable'] ) {
	$social_share = false;
} elseif ( isset( $post_share ) && 'no' == $post_share ) {
	$social_share = false;
} elseif ( '' == $page_share && ! $porto_settings['blog-post-share'] ) {
	$social_share = false;
}

$post_meta = '';

if ( in_array( 'date', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<div class="post-meta"><span class="meta-date"><i class="fa fa-calendar"></i>' . get_the_date( esc_attr( $porto_settings['blog-date-format'] ) ) . '</span></div>';
} $post_meta .= '<div class="post-meta">';

if ( in_array( 'author', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<span class="meta-author"><i class="fa fa-user-o"></i>' . esc_html__( 'By ', 'porto' ) . get_the_author_posts_link() . '</span>';
}

	$cats_list = get_the_category_list( ', ' );
if ( $cats_list && in_array( 'cats', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<span class="meta-cats"><i class="fa fa-folder-open-o"></i>' . $cats_list . '</span>';
}

	$tags_list = get_the_tag_list( '', ', ' );
if ( $tags_list && in_array( 'tags', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<span class="meta-tags"><i class="fa fa-envelope-o"></i>' . $tags_list . '</span>';
}
if ( in_array( 'comments', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<span class="meta-comments"><i class="fa fa-comments-o"></i>' . get_comments_popup_link( __( '0 Comments', 'porto' ), __( '1 Comment', 'porto' ), '% ' . __( 'Comments', 'porto' ) ) . '</span>';
}

if ( function_exists( 'Post_Views_Counter' ) && 'manual' == Post_Views_Counter()->options['display']['position'] && in_array( 'post', (array) Post_Views_Counter()->options['general']['post_types_count'] ) ) {
	$post_count = do_shortcode( '[post-views]' );
	if ( $post_count ) {
		$post_meta .= $post_count;
	}
}

if ( in_array( 'like', $porto_settings['post-metas'] ) ) {
	$post_meta .= '<span class="meta-like">' . porto_blog_like() . '</span>';
}

$post_meta .= '</div>';

$share = get_post_meta( $post->ID, 'post_share', true );
?>

<article <?php post_class( $post_class ); ?>>
<?php
if ( is_sticky() && is_home() && ! is_paged() ) {
	printf( '<span class="sticky-post">%s</span>', esc_html__( 'Featured', 'porto' ) );
}
if ( 'related' == $post_style ) :
	get_template_part( 'content', 'post-item' );
	elseif ( 'no_margin' == $post_style || 'hover_info' == $post_style ) :
		porto_get_template_part(
			'content',
			'post-item-simple',
			array(
				'image_size' => $image_size,
			)
		);
	else :
		?>
	<div class="grid-box">
		<?php
			// Post Slideshow
			$slideshow_type = get_post_meta( $post->ID, 'slideshow_type', true );

		if ( ! $slideshow_type ) {
			$slideshow_type = 'images';
		}
			porto_get_template_part(
				'views/posts/post-media/' . $slideshow_type,
				null,
				( 'images' == $slideshow_type ? array(
					'image_size' => $image_size,
				) : false )
			);
		?>

		<!-- Post meta before content -->
		<?php
		if ( 'before' === $porto_settings['post-meta-position'] ) {
			echo porto_filter_output( $post_meta );}
		?>
		<div class="post-content">

			<h4 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
			<?php
			porto_render_rich_snippets( false );
			if ( $porto_settings['blog-excerpt'] ) {
				echo ! $porto_settings['post-link'] ? '' : '<a href="' . get_the_permalink() . '">';
				echo porto_get_excerpt( $porto_settings['blog-excerpt-length'], false );
				echo ! $porto_settings['post-link'] ? '' : '</a>';
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
			<?php if ( '' === $porto_settings['blog-post-share-position'] && ( 'yes' == $share || ( empty( $share ) && $social_share ) ) ) : ?>
				<div class="post-block post-share">
					<?php get_template_part( 'share' ); ?>
				</div>
			<?php endif; ?>
		</div>
		<!-- Post meta after content -->
		<?php
		if ( 'before' !== $porto_settings['post-meta-position'] ) {
			echo porto_filter_output( $post_meta );
		}
		?>
		<div class="clearfix">
			<a class="btn btn-xs btn-default text-xs text-uppercase" href="<?php echo esc_url( apply_filters( 'the_permalink', get_permalink() ) ); ?>"><?php esc_html_e( 'Read more...', 'porto' ); ?></a>
		</div>
	</div>
<?php endif; ?>
</article>
