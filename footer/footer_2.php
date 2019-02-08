<?php
global $porto_settings;
$footer_view = porto_get_meta_value( 'footer_view' );

$cols = 0;
for ( $i = 1; $i <= 4; $i++ ) {
	if ( is_active_sidebar( 'footer-column-' . $i ) ) {
		$cols++;
	}
}
?>
<div id="footer" class="footer-2<?php echo ! $porto_settings['footer-ribbon'] ? '' : ' show-ribbon'; ?>"
<?php
if ( $porto_settings['footer-parallax'] ) {
	echo ' data-plugin-parallax data-plugin-options="{&quot;speed&quot;: ' . esc_attr( $porto_settings['footer-parallax-speed'] ) . '}" style="background-image: none !important;"';}
?>
>
	<?php if ( ! $footer_view && $cols ) : ?>
		<div class="footer-main">
			<div class="container">
				<?php if ( $porto_settings['footer-ribbon'] ) : ?>
					<div class="footer-ribbon"><?php echo wp_kses_post( $porto_settings['footer-ribbon'] ); ?></div>
				<?php endif; ?>

				<?php
				$cols = 0;
				for ( $i = 1; $i <= 4; $i++ ) {
					if ( is_active_sidebar( 'footer-column-' . $i ) ) {
						$cols++;
					}
				}
				if ( $cols ) :
					$col_class = array();
					switch ( $cols ) {
						case 1:
							$col_class[1] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget1'] ) ? $porto_settings['footer-widget1'] : '12' );
							break;
						case 2:
							$col_class[1] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget1'] ) ? $porto_settings['footer-widget1'] : '6' );
							$col_class[2] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget2'] ) ? $porto_settings['footer-widget2'] : '6' );
							break;
						case 3:
							$col_class[1] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget1'] ) ? $porto_settings['footer-widget1'] : '3' );
							$col_class[2] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget2'] ) ? $porto_settings['footer-widget2'] : '3' );
							$col_class[3] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget3'] ) ? $porto_settings['footer-widget3'] : '6' );
							break;
						case 4:
							$col_class[1] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget1'] ) ? $porto_settings['footer-widget1'] : '3' );
							$col_class[2] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget2'] ) ? $porto_settings['footer-widget2'] : '3' );
							$col_class[3] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget3'] ) ? $porto_settings['footer-widget3'] : '4' );
							$col_class[4] = 'col-lg-' . ( ( $porto_settings['footer-customize'] && $porto_settings['footer-widget4'] ) ? $porto_settings['footer-widget4'] : '2' );
							break;
					}
					?>
					<div class="row">
						<?php
						$cols = 1;
						for ( $i = 1; $i <= 4; $i++ ) {
							if ( is_active_sidebar( 'footer-column-' . $i ) ) {
								?>
								<div class="<?php echo esc_attr( $col_class[ $cols++ ] ); ?>">
									<?php dynamic_sidebar( 'footer-column-' . $i ); ?>
								</div>
								<?php
							}
						}
						?>
					</div>
				<?php endif; ?>

				<?php
				get_template_part( 'footer/footer_tooltip' );
				?>
			</div>
		</div>
	<?php endif; ?>

	<?php
	if ( ( $porto_settings['footer-logo'] && $porto_settings['footer-logo']['url'] ) || is_active_sidebar( 'footer-bottom' ) || $porto_settings['footer-copyright'] ) :
		?>
	<div class="footer-bottom">
		<div class="container">
			<?php if ( ( $porto_settings['footer-logo'] && $porto_settings['footer-logo']['url'] ) || 'left' == $porto_settings['footer-copyright-pos'] || ( 'right' == $porto_settings['footer-copyright-pos'] && is_active_sidebar( 'footer-bottom' ) ) ) : ?>
			<div class="footer-left">
				<?php
				// show logo
				if ( $porto_settings['footer-logo'] && $porto_settings['footer-logo']['url'] ) :
					?>
					<span class="logo">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?> - <?php bloginfo( 'description' ); ?>">
							<?php echo '<img class="img-responsive" src="' . esc_url( str_replace( array( 'http:', 'https:' ), '', $porto_settings['footer-logo']['url'] ) ) . '" alt="' . esc_attr( get_bloginfo( 'name', 'display' ) ) . '" />'; ?>
						</a>
					</span>
				<?php endif; ?>
				<?php
				if ( 'left' == $porto_settings['footer-copyright-pos'] ) {
					echo '<span class="footer-copyright">' . wp_kses_post( $porto_settings['footer-copyright'] ) . '</span>';
				} elseif ( 'right' == $porto_settings['footer-copyright-pos'] && is_active_sidebar( 'footer-bottom' ) ) {
					dynamic_sidebar( 'footer-bottom' );
				}
				?>
			</div>
			<?php endif; ?>

			<?php if ( 'center' == $porto_settings['footer-copyright-pos'] ) : ?>
				<div class="footer-center">
					<?php
					if ( 'center' == $porto_settings['footer-copyright-pos'] ) {
						echo '<span class="footer-copyright">' . wp_kses_post( $porto_settings['footer-copyright'] ) . '</span>';
						dynamic_sidebar( 'footer-bottom' );
					}
					?>
				</div>
			<?php endif; ?>

			<?php if ( 'right' == $porto_settings['footer-copyright-pos'] ) { ?>
				<div class="footer-right"><?php echo '<span class="footer-copyright">' . wp_kses_post( $porto_settings['footer-copyright'] ) . '</span>'; ?></div>
			<?php } elseif ( 'left' == $porto_settings['footer-copyright-pos'] && is_active_sidebar( 'footer-bottom' ) ) { ?>
				<div class="footer-right"><?php dynamic_sidebar( 'footer-bottom' ); ?></div>
			<?php } ?>
		</div>
	</div>
	<?php endif; ?>
</div>
