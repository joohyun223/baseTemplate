<template>
  <div>
    <TModalBtn @modalbuttonclicked="showModal" :btntext="btntext" />
    <TModalWrap :ariaLabelledby="ariaLabelledby" :modaldialogClasses="modaldialogClasses">
        <TModalHeader @headercloseclicked="closeModal" :headerText="headerText" />
        <div class="modal-body">
            <slot name="modalBodyText"></slot>
        </div>
        <TModalFooter @footerCloseClicked="closeModal" @confirmBtnClicked="confirmBtnClicked" :footerCloseText="footerCloseText" :footerSaveText="footerSaveText" />
    </TModalWrap>
  </div>
</template>

<script>
import js from './TModal.js';
export default js;
</script>

<style>
</style>