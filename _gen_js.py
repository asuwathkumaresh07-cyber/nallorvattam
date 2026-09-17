# coding: utf-8
# Generates register.js with full bilingual support
# All Tamil text encoded as unicode escapes to avoid shell encoding issues

JS = u"""/* ============================================================
   REGISTER PAGE - JAVASCRIPT
   Tiruppur City Municipal Corporation Address System
   Full EN/TA bilingual (no duplicates), dependent dropdowns,
   live address preview, multi-step form, certificate redirect
============================================================ */
'use strict';

/* -----------------------------------------------------------
   CORP DATA
----------------------------------------------------------- */
const CORP_DATA = {
  mandalams: [
    { id:1, en:'Mandalam 1 \u2013 15 Velampalayam',
      ta:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd 1 \u2013 15 \u0bb5\u0bc7\u0bb2\u0bae\u0bcd\u0baa\u0bbe\u0bb3\u0bc8\u0baf\u0bae\u0bcd',
      wards:[
        {no:1, en:'Ward 1', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 1'},
        {no:9, en:'Ward 9', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 9'},
        {no:10,en:'Ward 10',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 10'},
        {no:11,en:'Ward 11',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 11'},
        {no:12,en:'Ward 12',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 12'},
        {no:13,en:'Ward 13',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 13'},
        {no:14,en:'Ward 14',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 14'},
        {no:15,en:'Ward 15',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 15'},
        {no:21,en:'Ward 21',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 21'},
        {no:22,en:'Ward 22',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 22'},
        {no:23,en:'Ward 23',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 23'},
        {no:24,en:'Ward 24',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 24'},
        {no:25,en:'Ward 25',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 25'},
        {no:26,en:'Ward 26',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 26'},
        {no:27,en:'Ward 27',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 27'}
      ]
    },
    { id:2, en:'Mandalam 2 \u2013 Thottipalayam',
      ta:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd 2 \u2013 \u0ba4\u0bca\u0b9f\u0bcd\u0b9f\u0bbf\u0baa\u0bbe\u0bb3\u0bc8\u0baf\u0bae\u0bcd',
      wards:[
        {no:2, en:'Ward 2', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 2'},
        {no:3, en:'Ward 3', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 3'},
        {no:4, en:'Ward 4', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 4'},
        {no:5, en:'Ward 5', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 5'},
        {no:6, en:'Ward 6', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 6'},
        {no:7, en:'Ward 7', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 7'},
        {no:8, en:'Ward 8', ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 8'},
        {no:16,en:'Ward 16',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 16'},
        {no:17,en:'Ward 17',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 17'},
        {no:18,en:'Ward 18',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 18'},
        {no:19,en:'Ward 19',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 19'},
        {no:20,en:'Ward 20',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 20'},
        {no:30,en:'Ward 30',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 30'},
        {no:31,en:'Ward 31',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 31'},
        {no:32,en:'Ward 32',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 32'}
      ]
    },
    { id:3, en:'Mandalam 3 \u2013 Nallur',
      ta:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd 3 \u2013 \u0ba8\u0bb2\u0bcd\u0bb2\u0bc2\u0bb0\u0bcd',
      wards:[
        {no:33,en:'Ward 33',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 33'},
        {no:34,en:'Ward 34',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 34'},
        {no:35,en:'Ward 35',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 35'},
        {no:44,en:'Ward 44',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 44'},
        {no:45,en:'Ward 45',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 45'},
        {no:46,en:'Ward 46',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 46'},
        {no:47,en:'Ward 47',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 47'},
        {no:48,en:'Ward 48',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 48'},
        {no:49,en:'Ward 49',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 49'},
        {no:50,en:'Ward 50',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 50'},
        {no:51,en:'Ward 51',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 51'},
        {no:56,en:'Ward 56',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 56'},
        {no:58,en:'Ward 58',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 58'},
        {no:59,en:'Ward 59',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 59'},
        {no:60,en:'Ward 60',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 60'}
      ]
    },
    { id:4, en:'Mandalam 4 \u2013 Andipalayam',
      ta:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd 4 \u2013 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0baa\u0bbe\u0bb3\u0bc8\u0baf\u0bae\u0bcd',
      wards:[
        {no:28,en:'Ward 28',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 28'},
        {no:29,en:'Ward 29',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 29'},
        {no:36,en:'Ward 36',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 36'},
        {no:37,en:'Ward 37',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 37'},
        {no:38,en:'Ward 38',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 38'},
        {no:39,en:'Ward 39',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 39'},
        {no:40,en:'Ward 40',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 40'},
        {no:41,en:'Ward 41',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 41'},
        {no:42,en:'Ward 42',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 42'},
        {no:43,en:'Ward 43',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 43'},
        {no:52,en:'Ward 52',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 52'},
        {no:53,en:'Ward 53',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 53'},
        {no:54,en:'Ward 54',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 54'},
        {no:55,en:'Ward 55',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 55'},
        {no:57,en:'Ward 57',ta:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1 57'}
      ]
    }
  ]
};

/* -----------------------------------------------------------
   TRANSLATION TABLE  (one language at a time, no duplicates)
----------------------------------------------------------- */
const TRANS = {
  en: {
    brand_sub:'Tiruppur',
    reg_badge:'Member Registration',
    reg_title_pre:'Join',
    reg_sub:'Stand with us for a <strong>waste-free Tiruppur.</strong> Fill in your details \u2014 it takes less than 2 minutes.',
    addr_section_title:'Address Details',
    corp_name:'Tiruppur Corp',
    corp_full_label:'Tiruppur City Municipal Corporation',
    label_mandalam:'Mandalam',
    label_ward:'Ward',
    label_door:'Door No.',
    label_street:'Street',
    label_area:'Area / Locality',
    label_building:'Building / Apartment Name',
    label_landmark:'Landmark',
    label_pincode:'Pincode',
    label_mobile:'Mobile Number',
    placeholder_mandalam:'Select Mandalam',
    placeholder_ward:'Select Ward',
    placeholder_door:'Enter Door Number  e.g. 12/4',
    placeholder_street:'Enter Street Name  e.g. Gandhi Street',
    placeholder_area:'Enter Area or Locality  e.g. Chettipalayam',
    placeholder_building:'e.g. Sri Lakshmi Apartments',
    placeholder_landmark:'Enter Nearby Landmark  e.g. Near Bus Stand',
    placeholder_pincode:'Enter 6-digit Pincode',
    placeholder_mobile:'Enter 10-digit Mobile Number',
    addr_preview_label:'Address Preview',
    optional:'(Optional)',
    err_mandalam:'Please select a Mandalam.',
    err_ward:'Please select a Ward.',
    err_door:'Please enter your Door Number.',
    err_street:'Please enter your Street name.',
    err_area:'Please enter your Area / Locality.',
    err_pincode:'Please enter a valid 6-digit Pincode.',
    err_mobile:'Please enter a valid 10-digit Mobile Number.',
    err_terms:'You must agree to continue.',
    step1_label:'Your Details',
    step2_label:'Review',
    step3_label:'Done!',
    form_title1:'Personal Details',
    form_sub1:'Fields marked * are required.',
    form_title2:'Review Your Details',
    form_sub2:'Everything look correct? Submit when ready.',
    btn_continue:'Continue to Review',
    btn_edit:'Edit',
    btn_submit:'Submit Registration',
    btn_share:'Share',
    cl_name:'Full Name',cl_phone:'Phone',cl_age:'Age',cl_years:'years',
    cl_email:'Email',cl_occ:'Occupation',cl_heard:'Heard via',
    cl_addr:'ADDRESS',cl_mandalam:'Mandalam',cl_ward:'Ward',
    cl_door:'Door No.',cl_street:'Street',cl_area:'Area',
    cl_building:'Building',cl_landmark:'Landmark',
    cl_pincode:'Pincode',cl_mobile:'Mobile',
    privacy:'Your data is private and secure.',
    terms_text:'I agree to actively participate in cleanup drives and community events organised by Nallor Vattam.',
    city_name:'Tiruppur',
    door_prefix:'Door No. ',
    submitting:'Submitting...'
  },
  ta: {
    brand_sub:'\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd',
    reg_badge:'\u0b89\u0bb1\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bb0\u0bcd \u0baa\u0ba4\u0bbf\u0bb5\u0bc1',
    reg_title_pre:'\u0b9a\u0bc7\u0bb0\u0bb5\u0bc1\u0bae\u0bcd',
    reg_sub:'<strong>\u0b95\u0bb4\u0bbf\u0bb5\u0bc1 \u0b87\u0bb2\u0bcd\u0bb2\u0bbe\u0ba4 \u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0b95</strong> \u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b9f\u0ba9\u0bcd \u0ba8\u0bbf\u0bb2\u0bcd\u0bb2\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd. \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc8 \u0baa\u0ba4\u0bbf\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.',
    addr_section_title:'\u0bae\u0bc1\u0b95\u0bb5\u0bb0\u0bbf \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd',
    corp_name:'\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u0bae\u0bbe\u0ba8\u0b95\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf',
    corp_full_label:'\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u0bae\u0bbe\u0ba8\u0b95\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf',
    label_mandalam:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd',
    label_ward:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1',
    label_door:'\u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b8e\u0ba3\u0bcd',
    label_street:'\u0ba4\u0bc6\u0bb0\u0bc1',
    label_area:'\u0baa\u0b95\u0bc1\u0ba4\u0bbf / \u0b87\u0b9f\u0bae\u0bcd',
    label_building:'\u0b95\u0b9f\u0bcd\u0b9f\u0bbf\u0b9f\u0bae\u0bcd / \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0baa\u0bc6\u0baf\u0bb0\u0bcd',
    label_landmark:'\u0b85\u0b9f\u0bc8\u0baf\u0bbe\u0bb3 \u0b87\u0b9f\u0bae\u0bcd',
    label_pincode:'\u0b85\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bc1',
    label_mobile:'\u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd',
    placeholder_mandalam:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_ward:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_door:'\u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_street:'\u0ba4\u0bc6\u0bb0\u0bc1\u0bb5\u0bbf\u0ba9\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_area:'\u0baa\u0b95\u0bc1\u0ba4\u0bbf \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_building:'\u0b8e.\u0b95\u0bbe. \u0bb8\u0bcd\u0bb0\u0bc0 \u0bb2\u0b9f\u0bcd\u0b9a\u0bc1\u0bae\u0bbf \u0b85\u0baa\u0bbe\u0bb0\u0bcd\u0b9f\u0bcd\u0bae\u0bc6\u0ba3\u0bcd\u0b9f\u0bcd\u0bb8\u0bcd',
    placeholder_landmark:'\u0b85\u0bb0\u0bc1\u0b95\u0bbf\u0bb2\u0bc1\u0bb3\u0bcd\u0bb3 \u0b85\u0b9f\u0bc8\u0baf\u0bbe\u0bb3 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_pincode:'6 \u0b87\u0bb2\u0b95\u0bcd\u0b95 \u0b85\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bcd\u0b9f\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    placeholder_mobile:'10 \u0b87\u0bb2\u0b95\u0bcd\u0b95 \u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd',
    addr_preview_label:'\u0bae\u0bc1\u0b95\u0bb5\u0bb0\u0bbf \u0bae\u0bc1\u0ba9\u0bcd\u0ba9\u0bcb\u0b9f\u0bcd\u0b9f\u0bae\u0bcd',
    optional:'(\u0bb5\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bae\u0bbe\u0ba9\u0ba4\u0bc1)',
    err_mandalam:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd.',
    err_ward:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd.',
    err_door:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.',
    err_street:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bc6\u0bb0\u0bc1\u0bb5\u0bbf\u0ba9\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.',
    err_area:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0b95\u0bc1\u0ba4\u0bbf\u0baf\u0bbf\u0ba9\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.',
    err_pincode:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 6 \u0b87\u0bb2\u0b95\u0bcd\u0b95 \u0b85\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bcd\u0b9f\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.',
    err_mobile:'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 10 \u0b87\u0bb2\u0b95\u0bcd\u0b95 \u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.',
    err_terms:'\u0ba4\u0bca\u0b9f\u0bb0 \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bcd\u0b95\u0bca\u0bb3\u0bcd\u0bb3 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.',
    step1_label:'\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd',
    step2_label:'\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bbe\u0baf\u0bcd\u0bb5\u0bc1',
    step3_label:'\u0bae\u0bc1\u0b9f\u0bbf\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1!',
    form_title1:'\u0ba4\u0ba9\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd',
    form_sub1:'* \u0b95\u0bc1\u0bb1\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0bc1\u0bb2\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0bbe\u0baf\u0bae\u0bbe\u0ba9\u0bb5\u0bc8.',
    form_title2:'\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc8 \u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bbe\u0baf\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd',
    form_sub2:'\u0b8e\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bbe? \u0ba4\u0baf\u0bbe\u0bb0\u0bbe\u0ba9\u0bbe\u0bb2\u0bcd \u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd.',
    btn_continue:'\u0bae\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bbe\u0baf\u0bcd\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0ba4\u0bca\u0b9f\u0bb0\u0bb5\u0bc1\u0bae\u0bcd',
    btn_edit:'\u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bb5\u0bc1\u0bae\u0bcd',
    btn_submit:'\u0baa\u0ba4\u0bbf\u0bb5\u0bc8 \u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd',
    btn_share:'\u0baa\u0b95\u0bbf\u0bb0\u0bb5\u0bc1\u0bae\u0bcd',
    cl_name:'\u0bae\u0bc1\u0bb4\u0bc1 \u0baa\u0bc6\u0baf\u0bb0\u0bcd',
    cl_phone:'\u0ba4\u0bca\u0bb2\u0bc8\u0baa\u0bc7\u0b9a\u0bbf',
    cl_age:'\u0bb5\u0baf\u0ba4\u0bc1',
    cl_years:'\u0bb5\u0baf\u0ba4\u0bc1',
    cl_email:'\u0bae\u0bbf\u0ba9\u0bcd\u0ba9\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd',
    cl_occ:'\u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd',
    cl_heard:'\u0b8e\u0baa\u0bcd\u0baa\u0b9f\u0bbf \u0b85\u0bb1\u0bbf\u0ba8\u0bcd\u0ba4\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd',
    cl_addr:'\u0bae\u0bc1\u0b95\u0bb5\u0bb0\u0bbf',
    cl_mandalam:'\u0bae\u0ba3\u0bcd\u0b9f\u0bb2\u0bae\u0bcd',
    cl_ward:'\u0bb5\u0bbe\u0bb0\u0bcd\u0b9f\u0bc1',
    cl_door:'\u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b8e\u0ba3\u0bcd',
    cl_street:'\u0ba4\u0bc6\u0bb0\u0bc1',
    cl_area:'\u0baa\u0b95\u0bc1\u0ba4\u0bbf',
    cl_building:'\u0b95\u0b9f\u0bcd\u0b9f\u0bbf\u0b9f\u0bae\u0bcd',
    cl_landmark:'\u0b85\u0b9f\u0bc8\u0baf\u0bbe\u0bb3 \u0b87\u0b9f\u0bae\u0bcd',
    cl_pincode:'\u0b85\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bc1',
    cl_mobile:'\u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd',
    privacy:'\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bb0\u0bb5\u0bc1 \u0ba4\u0ba9\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9\u0ba4\u0bc1.',
    terms_text:'\u0ba8\u0bb2\u0bcd\u0bb2\u0bcb\u0bb0\u0bcd \u0bb5\u0b9f\u0bcd\u0b9f\u0bae\u0bcd \u0b8f\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0baa\u0ba3\u0bbf\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bae\u0bc2\u0b95 \u0ba8\u0bbf\u0b95\u0bb4\u0bcd\u0bb5\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba4\u0bc0\u0bb5\u0bbf\u0bb0\u0bae\u0bbe\u0b95 \u0baa\u0b99\u0bcd\u0b95\u0bc7\u0bb1\u0bcd\u0b95 \u0b92\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bcd\u0b95\u0bca\u0bb3\u0bcd\u0b95\u0bbf\u0bb1\u0bc7\u0ba9\u0bcd.',
    city_name:'\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd',
    door_prefix:'\u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b8e\u0ba3\u0bcd ',
    submitting:'\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...'
  }
};

window._regT = TRANS;
window._corpData = CORP_DATA;

function getLang(){return localStorage.getItem('nv_lang')||'en';}
function easeOutExpo(t){return t===1?1:1-Math.pow(2,-10*t);}
function countUp(el,target,dur){
  if(!el)return;
  const s=performance.now();
  const tick=(now)=>{
    const p=Math.min((now-s)/dur,1);
    el.textContent=Math.round(target*easeOutExpo(p)).toLocaleString('en-IN');
    if(p<1)requestAnimationFrame(tick);
    else el.textContent=target.toLocaleString('en-IN');
  };
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded',()=>{

  /* Loader */
  const loader=document.getElementById('loader');
  const loaderBar=document.getElementById('loaderBar');
  const loaderPct=document.getElementById('loaderPercent');
  document.body.style.overflow='hidden';
  let pct=0;
  const lt=setInterval(()=>{
    pct=Math.min(pct+3.5+Math.random()*2,100);
    if(loaderBar)loaderBar.style.width=pct+'%';
    if(loaderPct)loaderPct.textContent=Math.floor(pct)+'%';
    if(pct>=100){
      clearInterval(lt);
      if(loaderBar)loaderBar.style.width='100%';
      if(loaderPct)loaderPct.textContent='100%';
      setTimeout(()=>{
        if(loader)loader.classList.add('hidden');
        document.body.style.overflow='';
        countUp(document.getElementById('rc-members'),1248,1800);
      },380);
    }
  },28);

  /* Mobile nav */
  const hamburger=document.getElementById('hamburger');
  const navLinks=document.getElementById('navLinks');
  if(hamburger&&navLinks){
    hamburger.addEventListener('click',()=>{
      const open=navLinks.classList.toggle('open');
      hamburger.classList.toggle('active',open);
    });
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      navLinks.classList.remove('open');hamburger.classList.remove('active');
    }));
  }

  /* --------------------------------------------------------
     LANGUAGE SYSTEM
  -------------------------------------------------------- */
  const langToggle=document.getElementById('langToggle');
  const langLabel=document.getElementById('langLabel');
  let currentLang=getLang();

  function applyLang(lang,animate){
    currentLang=lang;
    localStorage.setItem('nv_lang',lang);
    document.documentElement.lang=lang==='ta'?'ta':'en';
    const doUpdate=()=>{
      const tr=TRANS[lang];
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k=el.getAttribute('data-i18n');
        if(tr[k]!==undefined)el.innerHTML=tr[k];
      });
      document.querySelectorAll('[data-en][data-ta]').forEach(el=>{
        el.textContent=lang==='ta'?el.getAttribute('data-ta'):el.getAttribute('data-en');
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const k=el.getAttribute('data-i18n-placeholder');
        if(tr[k]!==undefined)el.placeholder=tr[k];
      });
      document.querySelectorAll('[data-i18n-option]').forEach(el=>{
        const k=el.getAttribute('data-i18n-option');
        if(tr[k]!==undefined)el.textContent=tr[k];
      });
      const s1=document.querySelector('#sind1>span');
      const s2=document.querySelector('#sind2>span');
      const s3=document.querySelector('#sind3>span');
      if(s1)s1.textContent=tr.step1_label;
      if(s2)s2.textContent=tr.step2_label;
      if(s3)s3.textContent=tr.step3_label;
      const ft1=document.querySelector('#step1 .rg-form-title');
      const fs1=document.querySelector('#step1 .rg-form-sub');
      const ft2=document.querySelector('#step2 .rg-form-title');
      const fs2=document.querySelector('#step2 .rg-form-sub');
      if(ft1)ft1.textContent=tr.form_title1;
      if(fs1)fs1.innerHTML=tr.form_sub1.replace('*','<span class="req">*</span>');
      if(ft2)ft2.textContent=tr.form_title2;
      if(fs2)fs2.textContent=tr.form_sub2;
      const nb=document.getElementById('nextBtn');
      const eb=document.getElementById('editBtn');
      const sb=document.getElementById('submitBtn');
      if(nb)nb.innerHTML=tr.btn_continue+' <i class="fas fa-arrow-right"></i>';
      if(eb)eb.innerHTML='<i class="fas fa-pen"></i> '+tr.btn_edit;
      if(sb&&!sb.disabled)sb.innerHTML='<i class="fas fa-paper-plane"></i> '+tr.btn_submit;
      const tspan=document.querySelector('.rg-checkbox>span:last-child');
      if(tspan)tspan.innerHTML=tr.terms_text+' <span class="req">*</span>';
      const pn=document.querySelector('.rg-privacy-note');
      if(pn)pn.innerHTML='<i class="fas fa-lock"></i> '+tr.privacy;
      if(langLabel)langLabel.textContent=lang==='ta'?'EN':'\u0ba4\u0bae\u0bbf\u0bb4\u0bcd';
      if(langToggle)langToggle.title=lang==='ta'?'Switch to English':'Switch to Tamil';
      const sm=document.getElementById('fmandalam')?.value;
      const sw=document.getElementById('fward')?.value;
      populateMandalams();
      if(sm){
        const ms=document.getElementById('fmandalam');
        if(ms)ms.value=sm;
        populateWards(sm);
        if(sw){const ws=document.getElementById('fward');if(ws)ws.value=sw;}
      }
      updateAddressPreview();
    };
    if(animate){
      document.body.classList.add('lang-switching');
      setTimeout(()=>{doUpdate();document.body.classList.remove('lang-switching');},200);
    }else{doUpdate();}
  }

  applyLang(currentLang,false);
  if(langToggle)langToggle.addEventListener('click',()=>applyLang(currentLang==='ta'?'en':'ta',true));

  /* --------------------------------------------------------
     DROPDOWNS
  -------------------------------------------------------- */
  function populateMandalams(){
    const sel=document.getElementById('fmandalam');
    if(!sel)return;
    const cur=sel.value;
    while(sel.options.length>1)sel.remove(1);
    CORP_DATA.mandalams.forEach(m=>{
      const o=document.createElement('option');
      o.value=m.id;
      o.textContent=getLang()==='ta'?m.ta:m.en;
      sel.appendChild(o);
    });
    if(cur)sel.value=cur;
  }

  function populateWards(mid){
    const sel=document.getElementById('fward');
    if(!sel)return;
    while(sel.options.length>1)sel.remove(1);
    sel.disabled=true;
    if(!mid)return;
    const m=CORP_DATA.mandalams.find(x=>x.id==mid);
    if(!m)return;
    m.wards.forEach(w=>{
      const o=document.createElement('option');
      o.value=w.no;
      o.textContent=getLang()==='ta'?w.ta:w.en;
      sel.appendChild(o);
    });
    sel.disabled=false;
  }

  populateMandalams();

  const mSel=document.getElementById('fmandalam');
  if(mSel)mSel.addEventListener('change',()=>{
    populateWards(mSel.value);
    const ws=document.getElementById('fward');
    if(ws)ws.value='';
    clearErr('fmandalam');
    updateAddressPreview();
  });

  const wSel=document.getElementById('fward');
  if(wSel)wSel.addEventListener('change',()=>{clearErr('fward');updateAddressPreview();});

  ['fdoor','fstreet','farea','fbuilding','flandmark','fpincode','fmobile'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',()=>{clearErr(id);updateAddressPreview();});
  });

  /* --------------------------------------------------------
     LIVE ADDRESS PREVIEW
  -------------------------------------------------------- */
  function updateAddressPreview(){
    const prev=document.getElementById('addrPreview');
    const txt=document.getElementById('addrPreviewText');
    if(!prev||!txt)return;
    const ms=document.getElementById('fmandalam');
    const ws=document.getElementById('fward');
    const door=(document.getElementById('fdoor')?.value||'').trim();
    const street=(document.getElementById('fstreet')?.value||'').trim();
    const area=(document.getElementById('farea')?.value||'').trim();
    const bld=(document.getElementById('fbuilding')?.value||'').trim();
    const lmk=(document.getElementById('flandmark')?.value||'').trim();
    const pin=(document.getElementById('fpincode')?.value||'').trim();
    if(!ms?.value||!ws?.value){prev.style.display='none';return;}
    const lang=getLang();const isTA=lang==='ta';const tr=TRANS[lang];
    const mo=CORP_DATA.mandalams.find(x=>x.id==ms.value);
    const wo=mo?.wards.find(x=>x.no==ws.value);
    const parts=[
      mo?(isTA?mo.ta:mo.en):null,
      wo?(isTA?wo.ta:wo.en):null,
      door?tr.door_prefix+door:null,
      street||null,bld||null,area||null,lmk||null,
      pin?tr.city_name+' \u2013 '+pin:tr.city_name
    ].filter(Boolean);
    txt.textContent=parts.join(', ');
    prev.style.display='block';
  }

  /* --------------------------------------------------------
     VALIDATION
  -------------------------------------------------------- */
  function showErr(id,msg){
    const e=document.getElementById('err-'+id);if(e)e.textContent=msg;
    const f=document.getElementById(id);if(f)f.classList.add('rg-err-field');
  }
  function clearErr(id){
    const e=document.getElementById('err-'+id);if(e)e.textContent='';
    const f=document.getElementById(id);if(f)f.classList.remove('rg-err-field');
  }
  ['fname','fphone','fage','femail'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.addEventListener('input',()=>clearErr(id));
  });

  function validate(){
    let ok=true;
    const tr=TRANS[getLang()];const isTA=getLang()==='ta';
    const fn=document.getElementById('fname');
    const fp=document.getElementById('fphone');
    const fa=document.getElementById('fage');
    const fe=document.getElementById('femail');
    const ft=document.getElementById('fterms');
    if(!fn?.value.trim()){showErr('fname',isTA?'\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.':'Full name is required.');ok=false;}else clearErr('fname');
    const ph=(fp?.value||'').trim().replace(/\s/g,'');
    if(!ph){showErr('fphone',isTA?'\u0ba4\u0bca\u0bb2\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd \u0ba4\u0bc7\u0bb5\u0bc8.':'Phone number is required.');ok=false;}
    else if(!/^(\+91)?[6-9]\d{9}$/.test(ph)){showErr('fphone',isTA?'\u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 10 \u0b87\u0bb2\u0b95\u0bcd\u0b95 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf \u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.':'Enter a valid 10-digit Indian mobile number.');ok=false;}
    else clearErr('fphone');
    const age=parseInt(fa?.value||'',10);
    if(!fa?.value.trim()){showErr('fage',isTA?'\u0bb5\u0baf\u0ba4\u0bc1 \u0ba4\u0bc7\u0bb5\u0bc8.':'Age is required.');ok=false;}
    else if(isNaN(age)||age<10||age>100){showErr('fage',isTA?'10 \u0bae\u0bc1\u0ba4\u0bb2\u0bcd 100 \u0bb5\u0bb0\u0bc8 \u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 \u0bb5\u0baf\u0ba4\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.':'Enter a valid age between 10 and 100.');ok=false;}
    else clearErr('fage');
    const em=(fe?.value||'').trim();
    if(em&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){showErr('femail',isTA?'\u0b9a\u0bb0\u0bbf\u0baf\u0bbe\u0ba9 \u0bae\u0bbf\u0ba9\u0bcd\u0ba9\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd \u0bae\u0bc1\u0b95\u0bb5\u0bb0\u0bbf\u0baf\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd.':'Enter a valid email address.');ok=false;}
    else clearErr('femail');
    const me=document.getElementById('fmandalam');
    if(!me?.value){showErr('fmandalam',tr.err_mandalam);ok=false;}else clearErr('fmandalam');
    const we=document.getElementById('fward');
    if(!we?.value){showErr('fward',tr.err_ward);ok=false;}else clearErr('fward');
    const de=document.getElementById('fdoor');
    if(!de?.value.trim()){showErr('fdoor',tr.err_door);ok=false;}else clearErr('fdoor');
    const se=document.getElementById('fstreet');
    if(!se?.value.trim()){showErr('fstreet',tr.err_street);ok=false;}else clearErr('fstreet');
    const ae=document.getElementById('farea');
    if(!ae?.value.trim()){showErr('farea',tr.err_area);ok=false;}else clearErr('farea');
    const pe=document.getElementById('fpincode');
    if(!pe?.value.trim()||!/^\d{6}$/.test(pe.value.trim())){showErr('fpincode',tr.err_pincode);ok=false;}else clearErr('fpincode');
    const mob=document.getElementById('fmobile');
    if(!mob?.value.trim()||!/^[6-9]\d{9}$/.test(mob.value.trim())){showErr('fmobile',tr.err_mobile);ok=false;}else clearErr('fmobile');
    if(!ft?.checked){const e=document.getElementById('err-fterms');if(e)e.textContent=tr.err_terms;ok=false;}
    else{const e=document.getElementById('err-fterms');if(e)e.textContent='';}
    return ok;
  }

  /* --------------------------------------------------------
     STEP TRANSITIONS
  -------------------------------------------------------- */
  const st1=document.getElementById('step1'),st2=document.getElementById('step2'),st3=document.getElementById('step3');
  const sd1=document.getElementById('sind1'),sd2=document.getElementById('sind2'),sd3=document.getElementById('sind3');
  const sl1=document.getElementById('sline1'),sl2=document.getElementById('sline2');

  function goToStep(n){
    [st1,st2,st3].forEach(el=>{if(el)el.classList.add('rg-hidden');});
    [sd1,sd2,sd3].forEach(el=>{if(el)el.classList.remove('rg-step-active','rg-step-done');});
    if(n===1){st1?.classList.remove('rg-hidden');sd1?.classList.add('rg-step-active');sl1?.classList.remove('done');sl2?.classList.remove('done');}
    else if(n===2){st2?.classList.remove('rg-hidden');sd1?.classList.add('rg-step-done');sd2?.classList.add('rg-step-active');sl1?.classList.add('done');sl2?.classList.remove('done');}
    else if(n===3){st3?.classList.remove('rg-hidden');sd1?.classList.add('rg-step-done');sd2?.classList.add('rg-step-done');sd3?.classList.add('rg-step-active','rg-step-done');sl1?.classList.add('done');sl2?.classList.add('done');}
    window.scrollTo({top:0,behavior:'smooth'});
  }

  /* --------------------------------------------------------
     NEXT BUTTON
  -------------------------------------------------------- */
  const nextBtn=document.getElementById('nextBtn');
  if(nextBtn)nextBtn.addEventListener('click',()=>{
    if(!validate())return;
    const lang=getLang();const isTA=lang==='ta';const tr=TRANS[lang];
    const ms=document.getElementById('fmandalam');const ws=document.getElementById('fward');
    const mo=CORP_DATA.mandalams.find(x=>x.id==ms?.value);
    const wo=mo?.wards.find(x=>x.no==ws?.value);
    const mtx=mo?(isTA?mo.ta:mo.en):'--';
    const wtx=wo?(isTA?wo.ta:wo.en):'--';
    const rows=[
      {l:tr.cl_name,v:document.getElementById('fname')?.value.trim()||'--'},
      {l:tr.cl_phone,v:document.getElementById('fphone')?.value.trim()||'--'},
      {l:tr.cl_age,v:(document.getElementById('fage')?.value.trim()||'--')+' '+tr.cl_years},
      {l:tr.cl_email,v:document.getElementById('femail')?.value.trim()||'--'},
      {l:tr.cl_occ,v:document.getElementById('foccupation')?.value||'--'},
      {l:tr.cl_heard,v:document.querySelector('input[name="source"]:checked')?.value||'--'},
      {l:'__DIV__',v:tr.cl_addr},
      {l:tr.cl_mandalam,v:mtx},{l:tr.cl_ward,v:wtx},
      {l:tr.cl_door,v:document.getElementById('fdoor')?.value.trim()||'--'},
      {l:tr.cl_street,v:document.getElementById('fstreet')?.value.trim()||'--'},
      {l:tr.cl_area,v:document.getElementById('farea')?.value.trim()||'--'},
      {l:tr.cl_building,v:document.getElementById('fbuilding')?.value.trim()||'--'},
      {l:tr.cl_landmark,v:document.getElementById('flandmark')?.value.trim()||'--'},
      {l:tr.cl_pincode,v:document.getElementById('fpincode')?.value.trim()||'--'},
      {l:tr.cl_mobile,v:document.getElementById('fmobile')?.value.trim()||'--'}
    ];
    const c=document.getElementById('confirmRows');
    if(c)c.innerHTML=rows.map(r=>r.l==='__DIV__'
      ?'<div class="rg-cd-row rg-cd-divider"><span class="rg-cd-addr-head">'+r.v+'</span></div>'
      :'<div class="rg-cd-row"><span class="rg-cd-label">'+r.l+'</span><span class="rg-cd-value">'+r.v+'</span></div>'
    ).join('');
    goToStep(2);
  });

  /* --------------------------------------------------------
     EDIT BUTTON
  -------------------------------------------------------- */
  const editBtn=document.getElementById('editBtn');
  if(editBtn)editBtn.addEventListener('click',()=>goToStep(1));

  /* --------------------------------------------------------
     SUBMIT -> certificate.html
  -------------------------------------------------------- */
  const submitBtn=document.getElementById('submitBtn');
  if(submitBtn)submitBtn.addEventListener('click',()=>{
    submitBtn.disabled=true;
    const lang=getLang();const tr=TRANS[lang];
    submitBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> '+tr.submitting;
    setTimeout(()=>{
      const mnum=1249+Math.floor(Math.random()*50);
      const mid='NV-'+String(mnum).padStart(5,'0');
      const isTA=lang==='ta';
      const ms=document.getElementById('fmandalam');
      const ws=document.getElementById('fward');
      const mo=CORP_DATA.mandalams.find(x=>x.id==ms?.value);
      const wo=mo?.wards.find(x=>x.no==ws?.value);
      const p=new URLSearchParams({
        name:document.getElementById('fname')?.value.trim()||'',
        memberId:mid,memberNum:mnum,
        corpEn:'Tiruppur City Municipal Corporation',
        corpTa:'\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u0bae\u0bbe\u0ba8\u0b95\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bbf',
        mandalamEn:mo?mo.en:'',mandalamTa:mo?mo.ta:'',
        wardEn:wo?wo.en:'',wardTa:wo?wo.ta:'',
        door:document.getElementById('fdoor')?.value.trim()||'',
        street:document.getElementById('fstreet')?.value.trim()||'',
        area:document.getElementById('farea')?.value.trim()||'',
        building:document.getElementById('fbuilding')?.value.trim()||'',
        landmark:document.getElementById('flandmark')?.value.trim()||'',
        pincode:document.getElementById('fpincode')?.value.trim()||'',
        mobile:document.getElementById('fmobile')?.value.trim()||'',
        date:new Date().toLocaleDateString('en-IN'),lang:lang
      });
      window.location.href='certificate.html?'+p.toString();
    },1800);
  });

  /* Share */
  const shareBtn=document.getElementById('shareBtn');
  if(shareBtn)shareBtn.addEventListener('click',()=>{
    const text='I just joined Nallor Vattam - Tiruppur waste movement! '+location.origin+'/register.html';
    if(navigator.share)navigator.share({title:'Nallor Vattam',text,url:location.href}).catch(()=>{});
    else navigator.clipboard.writeText(text).then(()=>{
      shareBtn.innerHTML='<i class="fas fa-check"></i> Copied!';
      setTimeout(()=>{shareBtn.innerHTML='<i class="fas fa-share-alt"></i> '+TRANS[getLang()].btn_share;},2500);
    });
  });

});
"""

with open(r'c:\Users\Acer\Downloads\test\register.js', 'w', encoding='utf-8') as f:
    f.write(JS)
import os
print('Done:', os.path.getsize(r'c:\Users\Acer\Downloads\test\register.js'), 'bytes')