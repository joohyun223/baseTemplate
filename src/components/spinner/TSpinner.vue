<template>
    <div :class="spinClasses" role="status">
        <!-- <span class="sr-only">Loading...</span> -->
        <slot></slot>
    </div>
</template>

<script>
import js from './TSpinner.js';
export default js;
</script>

<style>
</style>