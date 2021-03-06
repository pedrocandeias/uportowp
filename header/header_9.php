<?php
global $porto_settings, $porto_layout;
?>
<header id="header" class="header-separate header-9 sticky-menu-header<?php echo ! $porto_settings['logo-overlay'] || ! $porto_settings['logo-overlay']['url'] ? '' : ' logo-overlay-header'; ?>">
	<?php if ( $porto_settings['show-header-top'] ) : ?>
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<?php
					// show social links
					echo porto_header_socials();

					// show view switcher
					$view_switcher     = porto_view_switcher();

					if ( $view_switcher ) {
						echo '<div class="switcher-wrap">';
					}

					echo porto_filter_output( $view_switcher );

					if ( $view_switcher ) {
						echo '<span class="gap switcher-gap">|</span>';
					}

					if ( $view_switcher ) {
						echo '</div>';
					}
					?>
				</div>
				<div class="header-right">
					<?php
					// show welcome message and top navigation
					$top_nav = porto_top_navigation();

					if ( $porto_settings['welcome-msg'] ) {
						echo '<span class="welcome-msg">' . do_shortcode( $porto_settings['welcome-msg'] ) . '</span>';
					}

					if ( $porto_settings['welcome-msg'] && $top_nav ) {
						echo '<span class="gap">|</span>';
					}

					echo porto_filter_output( $top_nav );
					?>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<div class="header-main">
		<div class="container">
			<div class="header-left">
				<?php
				// show logo
				echo porto_logo();
				?>
			</div>
			<div class="header-center">
				<?php
				// show search form
				echo porto_search_form();

				// show mobile toggle
				?>
				<a class="mobile-toggle"><i class="fa fa-reorder"></i></a>
			</div>
			<div class="header-right">
				<div>
					<?php
					// show contact info
					$contact_info = $porto_settings['header-contact-info'];

					if ( $contact_info ) {
						echo '<div class="header-contact">' . do_shortcode( $contact_info ) . '</div>';
					}
					?>
				</div>

				<?php
				get_template_part( 'header/header_tooltip' );
				?>

			</div>
		</div>
		<?php
			get_template_part( 'header/mobile_menu' );
		?>
	</div>

	<?php
	$toggle_menu = porto_main_toggle_menu();
	if ( $toggle_menu || $porto_settings['menu-block'] ) :
		?>
	<div class="main-menu-wrap">
		<div id="main-menu" class="container">
			<div class="menu-center">
				<div class="row">
					<div class="col-lg-3 sidebar">
						<?php
						// show toggle menu
						if ( $toggle_menu ) :
							?>
							<div id="main-toggle-menu" class="<?php echo ( ! $porto_settings['menu-toggle-onhome'] && is_front_page() ) ? 'show-always' : 'closed'; ?>">
								<div class="menu-title closed">
									<div class="toggle"></div>
									<?php if ( $porto_settings['menu-title'] ) : ?>
										<?php echo do_shortcode( $porto_settings['menu-title'] ); ?>
									<?php endif; ?>
								</div>
								<div class="toggle-menu-wrap">
									<?php echo porto_filter_output( $toggle_menu ); ?>
								</div>
							</div>
						<?php endif; ?>
					</div>
					<?php if ( $porto_settings['menu-block'] ) : ?>
					<div class="col-lg-9">
						<div class="menu-custom-block">
							<?php echo do_shortcode( $porto_settings['menu-block'] ); ?>
							<?php
							if ( isset( $porto_settings['menu-login-pos'] ) && 'main_menu' == $porto_settings['menu-login-pos'] ) {
								if ( is_user_logged_in() ) {
									$logout_link = '';

										$logout_link = wp_logout_url( get_home_url() );
									echo '<a class="pull-right p-r-none" href="' . esc_url( $logout_link ) . '"><i class="avatar">' . get_avatar( get_current_user_id(), $size = '24' ) . '</i>' . esc_html__( 'Logout', 'porto' ) . '</a>';
								} else {
									$login_link    = '';
									$register_link = '';
										$login_link    = wp_login_url( get_home_url() );
										$active_signup = get_site_option( 'registration', 'none' );
										$active_signup = apply_filters( 'wpmu_active_signup', $active_signup );
										if ( 'none' != $active_signup ) {
											$register_link = wp_registration_url( get_home_url() );
										}
									if ( $register_link && isset( $porto_settings['menu-enable-register'] ) && $porto_settings['menu-enable-register'] ) {
										echo '<a class="porto-link-register pull-right p-r-none" href="' . esc_url( $register_link ) . '"><i class="fa fa-user-plus"></i>' . esc_html__( 'Register', 'porto' ) . '</a>';
									}
									echo '<a class="porto-link-login pull-right p-r-none" href="' . esc_url( $login_link ) . '"><i class="fa fa-user"></i>' . esc_html__( 'Login', 'porto' ) . '</a>';
								}
							}
							?>
						</div>
					</div>
					<?php endif; ?>
				</div>
			</div>
			<?php if ( $porto_settings['show-sticky-searchform'] ) : ?>
				<div class="menu-right">
					<?php
					if ( $porto_settings['show-sticky-searchform'] ) {
						echo porto_search_form();
					}

					?>
				</div>
			<?php endif; ?>
		</div>
	</div>
	<?php endif; ?>
</header>
