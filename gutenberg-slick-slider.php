<?php
/**
 * Plugin Name:       Gutenberg Slick Slider
 * Description:       Image Slick Slider for Gutenberg.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Pardeep Singh
 * Author URI:        https://github.com/pardeepsinghrajewal/
 * Text Domain:       gutenberg-slick-slider
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenberg_slick_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gutenberg_slick_slider_block_init' );

function wpEnqueueSlickSlider() 
{ 
  if ( ! wp_script_is( 'jquery', 'enqueued' ) && ! wp_script_is( 'jquery', 'done' ) ) 
  {
    wp_enqueue_script( 'jquery' );
  }

  wp_enqueue_style('wc-slick',  plugins_url('/slick/slick.css',__FILE__ ));
  wp_enqueue_style('wc-slick-theme',  plugins_url('/slick/slick-theme.css',__FILE__ ));
  wp_enqueue_script('wc-slick', plugins_url('/slick/slick.js',__FILE__ ),array(), false, true );
}
add_action( 'wp_enqueue_scripts', 'wpEnqueueSlickSlider');

function enqueue_block_editor_assets() 
{
  if (!wp_script_is('jquery-ui-core', 'enqueued')) 
  {
    wp_enqueue_script('jquery-ui-sortable');
    
  }
}
add_action('enqueue_block_editor_assets', 'enqueue_block_editor_assets');
