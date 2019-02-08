<?php

$theme = wp_get_theme();
if ( $theme->parent_theme ) {
	$template_dir = basename( get_template_directory() );
	$theme        = wp_get_theme( $template_dir );
}
?>
<div class="wrap about-wrap porto-wrap">
	<h1><?php esc_html_e( 'Welcome to U.Porto WP!', 'porto' ); ?></h1>
	<div class="about-text"><?php echo esc_html__( 'U.Porto WP is installed! Use the following tabs for additional configurations.', 'porto' ); ?></div>
	<div class="porto-logo"><span class="porto-version"><?php esc_html_e( 'Version', 'porto' ); ?> <?php echo porto_version; ?></span></div>
	<h2 class="nav-tab-wrapper">
		<?php
		printf( '<a href="%s" class="nav-tab">%s</a>', esc_url( admin_url( 'customize.php' ) ), esc_html__( 'Theme Options', 'porto' ) );
		printf( '<a href="%s" class="nav-tab">%s</a>', esc_url( admin_url( 'themes.php?page=porto_settings' ) ), esc_html__( 'Advanced', 'porto' ) );
		printf( '<a href="%s" class="nav-tab">%s</a>', esc_url( admin_url( 'admin.php?page=porto-setup-wizard' ) ), esc_html__( 'Setup Wizard', 'porto' ) );
		printf( '<a href="%s" class="nav-tab">%s</a>', esc_url( admin_url( 'admin.php?page=porto-speed-optimize-wizard' ) ), esc_html__( 'Speed Optimize Wizard', 'porto' ) );
		?>
	</h2>
	<div class="row">
		<div class="welcome col-left">
			<div class="porto-section">
				<p class="about-description">
					<?php /* translators: $1: opening A tag which has link to the Porto documentation $2: closing A tag */ ?>
					<?php printf( esc_html__( 'Before you get started, check out the Wordpress %1$smanual%2$s or/and the help tab on the top right corner of the edit panels pages.', 'porto' ), '<a href="https://codex.wordpress.org/" target="_blank">', '</a>' ); ?>
				</p>
			</div>
		</div>
	</div>
</div>
