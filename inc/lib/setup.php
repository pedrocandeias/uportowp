<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $porto_settings;

// Lazy load
require porto_lib . '/lib/lazy-load/lazy-load.php';

// Infinite Scroll
require porto_lib . '/lib/infinite-scroll/infinite-scroll.php';


// Live Search
if ( isset( $porto_settings['search-live'] ) && $porto_settings['search-live'] ) {
	require porto_lib . '/lib/live-search/live-search.php';
}
