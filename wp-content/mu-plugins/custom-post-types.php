<?php 

// Register Post Types
function custom_post_type() {
	// Portfolio Post Type
	register_post_type( 'portfolio', array(
		'show_in_rest' => true,
		'public'			 => true,
		'has_archive'	 => true,
		'supports'		 => array('title', 'editor', 'thumbnail'),
		'rewrite'			 => array('slug' => 'portfolio'),
		'labels'			 => array(
			'name'					=> 'Portfolio',
			'add_new'				=> 'Add New Project',
			'add_new_item'	=> 'Add New Project',
			'edit_item'			=> 'Edit Project',
			'all_items'			=> 'All Projects',
			'singular_name' => 'Portfolio'
		),
		'menu_icon'		 => 'dashicons-format-gallery'
	) );
}

add_action( 'init', 'custom_post_type' );