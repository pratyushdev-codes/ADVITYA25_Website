import React from 'react';
import '../Hero.css'
import './herojs'
import './fontloader'

const Hero = () => {

    <style>
         {`
     html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
   font-family: sans-serif;
}

body {
    margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block;
}

audio,
canvas,
progress,
video {
    vertical-align: baseline;
    display: inline-block;
}

audio:not([controls]) {
    height: 0;
    display: none;
}

[hidden],
template {
    display: none;
}

a {
    background-color: rgba(0, 0, 0, 0);
}

a:active,
a:hover {
    outline: 0;
}

abbr[title] {
    border-bottom: 1px dotted;
}

b,
strong {
    font-weight: bold;
}

dfn {
    font-style: italic;
}

h1 {
    margin: .67em 0;
    font-size: 2em;
}

mark {
    color: #000;
    background: #ff0;
}

small {
    font-size: 80%;
}

sub,
sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
}

sup {
    top: -.5em;
}

sub {
    bottom: -.25em;
}

img {
    border: 0;
}

svg:not(:root) {
    overflow: hidden;
}

hr {
    box-sizing: content-box;
    height: 0;
}

pre {
    overflow: auto;
}

code,
kbd,
pre,
samp {
    font-family: monospace;
    font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"] {
    -webkit-appearance: button;
    cursor: pointer;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

input[type="search"] {
    -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

legend {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
}

optgroup {
    font-weight: bold;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    padding: 0;
}

@font-face {
    font-family: webflow-icons;
    src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
    font-weight: normal;
    font-style: normal;
}

[class^="w-icon-"],
[class*=" w-icon-"] {
    speak: none;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
    content: "";
}

.w-icon-slider-left:before {
    content: "";
}

.w-icon-nav-menu:before {
    content: "";
}

.w-icon-arrow-down:before,
.w-icon-dropdown-toggle:before {
    content: "";
}

.w-icon-file-upload-remove:before {
    content: "";
}

.w-icon-file-upload-icon:before {
    content: "";
}

* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    color: #333;
    background-color: #fff;
    min-height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
}

img {
    vertical-align: middle;
    max-width: 100%;
    display: inline-block;
}

html.w-mod-touch * {
    background-attachment: scroll !important;
}

.w-block {
    display: block;
}

.w-inline-block {
    max-width: 100%;
    display: inline-block;
}

.w-clearfix:before,
.w-clearfix:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-clearfix:after {
    clear: both;
}

.w-hidden {
    display: none;
}

.w-button {
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    background-color: #3898ec;
    border: 0;
    border-radius: 0;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block;
}

input.w-button {
    -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
    color: rgba(0, 0, 0, 0) !important;
}

.w-code-block {
    margin: unset;
}

pre.w-code-block code {
    all: inherit;
}

.w-webflow-badge,
.w-webflow-badge * {
    z-index: auto;
    visibility: visible;
    box-sizing: border-box;
    float: none;
    clear: none;
    box-shadow: none;
    opacity: 1;
    direction: ltr;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: inherit;
    font-variant: inherit;
    text-align: inherit;
    letter-spacing: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    text-indent: 0;
    text-transform: inherit;
    text-shadow: none;
    font-smoothing: auto;
    vertical-align: baseline;
    cursor: inherit;
    white-space: inherit;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    background: none;
    border: 0 rgba(0, 0, 0, 0);
    border-radius: 0;
    width: auto;
    min-width: 0;
    max-width: none;
    height: auto;
    min-height: 0;
    max-height: none;
    margin: 0;
    padding: 0;
    list-style-type: disc;
    transition: none;
    display: block;
    position: static;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    overflow: visible;
    transform: none;
}

.w-webflow-badge {
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1);
    visibility: visible !important;
    z-index: 2147483647 !important;
    color: #aaadb0 !important;
    opacity: 1 !important;
    background-color: #fff !important;
    border-radius: 3px !important;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    padding: 6px !important;
    font-size: 12px !important;
    line-height: 14px !important;
    text-decoration: none !important;
    display: inline-block !important;
    position: fixed !important;
    top: auto !important;
    bottom: 12px !important;
    left: auto !important;
    right: 12px !important;
    overflow: visible !important;
    transform: none !important;
}

.w-webflow-badge>img {
    visibility: visible !important;
    opacity: 1 !important;
    vertical-align: middle !important;
    display: inline-block !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 10px;
    font-weight: bold;
}

h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px;
}

h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px;
}

h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
}

h4 {
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
}

h5 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
}

h6 {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
}

p {
    margin-top: 0;
    margin-bottom: 10px;
}

blockquote {
    border-left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 22px;
}

figure {
    margin: 0 0 10px;
}

figcaption {
    text-align: center;
    margin-top: 5px;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
}

.w-list-unstyled {
    padding-left: 0;
    list-style: none;
}

.w-embed:before,
.w-embed:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-embed:after {
    clear: both;
}

.w-video {
    width: 100%;
    padding: 0;
    position: relative;
}

.w-video iframe,
.w-video object,
.w-video embed {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

button,
[type="button"],
[type="reset"] {
    cursor: pointer;
    -webkit-appearance: button;
    border: 0;
}

.w-form {
    margin: 0 0 15px;
}

.w-form-done {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
    display: none;
}

.w-form-fail {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
    display: none;
}

.w-input,
.w-select {
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block;
}

.w-input:-moz-placeholder,
.w-select:-moz-placeholder {
    color: #999;
}

.w-input::-moz-placeholder,
.w-select::-moz-placeholder {
    color: #999;
    opacity: 1;
}

.w-input::-webkit-input-placeholder,
.w-select::-webkit-input-placeholder {
    color: #999;
}

.w-input:focus,
.w-select:focus {
    border-color: #3898ec;
    outline: 0;
}

.w-input[disabled],
.w-select[disabled],
.w-input[readonly],
.w-select[readonly],
fieldset[disabled] .w-input,
fieldset[disabled] .w-select {
    cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled),
.w-select[disabled]:not(.w-input-disabled),
.w-input[readonly],
.w-select[readonly],
fieldset[disabled]:not(.w-input-disabled) .w-input,
fieldset[disabled]:not(.w-input-disabled) .w-select {
    background-color: #eee;
}

textarea.w-input,
textarea.w-select {
    height: auto;
}

.w-select {
    background-color: #f3f3f3;
}

.w-select[multiple] {
    height: auto;
}

.w-form-label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: normal;
    display: inline-block;
}

.w-radio {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block;
}

.w-radio:before,
.w-radio:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-radio:after {
    clear: both;
}

.w-radio-input {
    float: left;
    margin: 3px 0 0 -20px;
    line-height: normal;
}

.w-file-upload {
    margin-bottom: 10px;
    display: block;
}

.w-file-upload-input {
    opacity: 0;
    z-index: -100;
    width: .1px;
    height: .1px;
    position: absolute;
    overflow: hidden;
}

.w-file-upload-default,
.w-file-upload-uploading,
.w-file-upload-success {
    color: #333;
    display: inline-block;
}

.w-file-upload-error {
    margin-top: 10px;
    display: block;
}

.w-file-upload-default.w-hidden,
.w-file-upload-uploading.w-hidden,
.w-file-upload-error.w-hidden,
.w-file-upload-success.w-hidden {
    display: none;
}

.w-file-upload-uploading-btn {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: flex;
}

.w-file-upload-file {
    background-color: #fafafa;
    border: 1px solid #ccc;
    flex-grow: 1;
    justify-content: space-between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex;
}

.w-file-upload-file-name {
    font-size: 14px;
    font-weight: normal;
    display: block;
}

.w-file-remove-link {
    cursor: pointer;
    width: auto;
    height: auto;
    margin-top: 3px;
    margin-left: 10px;
    padding: 3px;
    display: block;
}

.w-icon-file-upload-remove {
    margin: auto;
    font-size: 10px;
}

.w-file-upload-error-msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline-block;
}

.w-file-upload-info {
    padding: 0 12px;
    line-height: 38px;
    display: inline-block;
}

.w-file-upload-label {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: inline-block;
}

.w-icon-file-upload-icon,
.w-icon-file-upload-uploading {
    width: 20px;
    margin-right: 8px;
    display: inline-block;
}

.w-icon-file-upload-uploading {
    height: 20px;
}

.w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
}

.w-container:before,
.w-container:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-container:after {
    clear: both;
}

.w-container .w-row {
    margin-left: -10px;
    margin-right: -10px;
}

.w-row:before,
.w-row:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-row:after {
    clear: both;
}

.w-row .w-row {
    margin-left: 0;
    margin-right: 0;
}

.w-col {
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
}

.w-col .w-col {
    padding-left: 0;
    padding-right: 0;
}

.w-col-1 {
    width: 8.33333%;
}

.w-col-2 {
    width: 16.6667%;
}

.w-col-3 {
    width: 25%;
}

.w-col-4 {
    width: 33.3333%;
}

.w-col-5 {
    width: 41.6667%;
}

.w-col-6 {
    width: 50%;
}

.w-col-7 {
    width: 58.3333%;
}

.w-col-8 {
    width: 66.6667%;
}

.w-col-9 {
    width: 75%;
}

.w-col-10 {
    width: 83.3333%;
}

.w-col-11 {
    width: 91.6667%;
}

.w-col-12 {
    width: 100%;
}

.w-hidden-main {
    display: none !important;
}

@media screen and (max-width: 991px) {
    .w-container {
        max-width: 728px;
    }
    .w-hidden-main {
        display: inherit !important;
    }
    .w-hidden-medium {
        display: none !important;
    }
    .w-col-medium-1 {
        width: 8.33333%;
    }
    .w-col-medium-2 {
        width: 16.6667%;
    }
    .w-col-medium-3 {
        width: 25%;
    }
    .w-col-medium-4 {
        width: 33.3333%;
    }
    .w-col-medium-5 {
        width: 41.6667%;
    }
    .w-col-medium-6 {
        width: 50%;
    }
    .w-col-medium-7 {
        width: 58.3333%;
    }
    .w-col-medium-8 {
        width: 66.6667%;
    }
    .w-col-medium-9 {
        width: 75%;
    }
    .w-col-medium-10 {
        width: 83.3333%;
    }
    .w-col-medium-11 {
        width: 91.6667%;
    }
    .w-col-medium-12 {
        width: 100%;
    }
    .w-col-stack {
        width: 100%;
        left: auto;
        right: auto;
    }
}

@media screen and (max-width: 767px) {
    .w-hidden-main,
    .w-hidden-medium {
        display: inherit !important;
    }
    .w-hidden-small {
        display: none !important;
    }
    .w-row,
    .w-container .w-row {
        margin-left: 0;
        margin-right: 0;
    }
    .w-col {
        width: 100%;
        left: auto;
        right: auto;
    }
    .w-col-small-1 {
        width: 8.33333%;
    }
    .w-col-small-2 {
        width: 16.6667%;
    }
    .w-col-small-3 {
        width: 25%;
    }
    .w-col-small-4 {
        width: 33.3333%;
    }
    .w-col-small-5 {
        width: 41.6667%;
    }
    .w-col-small-6 {
        width: 50%;
    }
    .w-col-small-7 {
        width: 58.3333%;
    }
    .w-col-small-8 {
        width: 66.6667%;
    }
    .w-col-small-9 {
        width: 75%;
    }
    .w-col-small-10 {
        width: 83.3333%;
    }
    .w-col-small-11 {
        width: 91.6667%;
    }
    .w-col-small-12 {
        width: 100%;
    }
}

@media screen and (max-width: 479px) {
    .w-container {
        max-width: none;
    }
    .w-hidden-main,
    .w-hidden-medium,
    .w-hidden-small {
        display: inherit !important;
    }
    .w-hidden-tiny {
        display: none !important;
    }
    .w-col {
        width: 100%;
    }
    .w-col-tiny-1 {
        width: 8.33333%;
    }
    .w-col-tiny-2 {
        width: 16.6667%;
    }
    .w-col-tiny-3 {
        width: 25%;
    }
    .w-col-tiny-4 {
        width: 33.3333%;
    }
    .w-col-tiny-5 {
        width: 41.6667%;
    }
    .w-col-tiny-6 {
        width: 50%;
    }
    .w-col-tiny-7 {
        width: 58.3333%;
    }
    .w-col-tiny-8 {
        width: 66.6667%;
    }
    .w-col-tiny-9 {
        width: 75%;
    }
    .w-col-tiny-10 {
        width: 83.3333%;
    }
    .w-col-tiny-11 {
        width: 91.6667%;
    }
    .w-col-tiny-12 {
        width: 100%;
    }
}

.w-widget {
    position: relative;
}

.w-widget-map {
    width: 100%;
    height: 400px;
}

.w-widget-map label {
    width: auto;
    display: inline;
}

.w-widget-map img {
    max-width: inherit;
}

.w-widget-map .gm-style-iw {
    text-align: center;
}

.w-widget-map .gm-style-iw>button {
    display: none !important;
}

.w-widget-twitter {
    overflow: hidden;
}

.w-widget-twitter-count-shim {
    vertical-align: top;
    text-align: center;
    background: #fff;
    border: 1px solid #758696;
    border-radius: 3px;
    width: 28px;
    height: 20px;
    display: inline-block;
    position: relative;
}

.w-widget-twitter-count-shim * {
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
    text-align: center;
    color: #999;
    font-family: serif;
    font-size: 15px;
    line-height: 12px;
    position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
    display: block;
    position: relative;
}

.w-widget-twitter-count-shim.w--large {
    width: 36px;
    height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
    margin-left: 5px;
    margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
    margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before,
.w-widget-twitter-count-shim:not(.w--vertical):after {
    content: " ";
    pointer-events: none;
    border: solid rgba(0, 0, 0, 0);
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
    border-width: 4px;
    border-color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin-top: -4px;
    margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
    border-width: 4px;
    border-color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin-top: -4px;
    margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
    width: 61px;
    height: 33px;
    margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before,
.w-widget-twitter-count-shim.w--vertical:after {
    content: " ";
    pointer-events: none;
    border: solid rgba(0, 0, 0, 0);
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
    border-width: 5px;
    border-color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
    border-width: 4px;
    border-color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
    width: 76px;
}

.w-background-video {
    color: #fff;
    height: 500px;
    position: relative;
    overflow: hidden;
}

.w-background-video>video {
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%;
}

.w-background-video>video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none !important;
}

.w-background-video--control {
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em;
}

.w-background-video--control>[hidden] {
    display: none !important;
}

.w-slider {
    text-align: center;
    clear: both;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    background: #ddd;
    height: 300px;
    position: relative;
}

.w-slider-mask {
    z-index: 1;
    white-space: nowrap;
    height: 100%;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-slide {
    vertical-align: top;
    white-space: normal;
    text-align: left;
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
}

.w-slider-nav {
    z-index: 2;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    height: 40px;
    margin: auto;
    padding-top: 10px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
}

.w-slider-nav.w-round>div {
    border-radius: 100%;
}

.w-slider-nav.w-num>div {
    font-size: inherit;
    line-height: inherit;
    width: auto;
    height: auto;
    padding: .2em .5em;
}

.w-slider-nav.w-shadow>div {
    box-shadow: 0 0 3px rgba(51, 51, 51, .4);
}

.w-slider-nav-invert {
    color: #fff;
}

.w-slider-nav-invert>div {
    background-color: rgba(34, 34, 34, .4);
}

.w-slider-nav-invert>div.w-active {
    background-color: #222;
}

.w-slider-dot {
    cursor: pointer;
    background-color: rgba(255, 255, 255, .4);
    width: 1em;
    height: 1em;
    margin: 0 3px .5em;
    transition: background-color .1s, color .1s;
    display: inline-block;
    position: relative;
}

.w-slider-dot.w-active {
    background-color: #fff;
}

.w-slider-dot:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
    box-shadow: none;
}

.w-slider-arrow-left,
.w-slider-arrow-right {
    cursor: pointer;
    color: #fff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 80px;
    margin: auto;
    font-size: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"],
.w-slider-arrow-right [class^="w-icon-"],
.w-slider-arrow-left [class*=" w-icon-"],
.w-slider-arrow-right [class*=" w-icon-"] {
    position: absolute;
}

.w-slider-arrow-left:focus,
.w-slider-arrow-right:focus {
    outline: 0;
}

.w-slider-arrow-left {
    z-index: 3;
    right: auto;
}

.w-slider-arrow-right {
    z-index: 4;
    left: auto;
}

.w-icon-slider-left,
.w-icon-slider-right {
    width: 1em;
    height: 1em;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.w-slider-aria-label {
    clip: rect(0 0 0 0);
    border: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
}

.w-slider-force-show {
    display: block !important;
}

.w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative;
}

.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative;
}

.w-dropdown-toggle {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block;
}

.w-dropdown-toggle:focus {
    outline: 0;
}

.w-icon-dropdown-toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
}

.w-dropdown-list {
    background: #ddd;
    min-width: 100%;
    display: none;
    position: absolute;
}

.w-dropdown-list.w--open {
    display: block;
}

.w-dropdown-link {
    color: #222;
    padding: 10px 20px;
    display: block;
}

.w-dropdown-link.w--current {
    color: #0082f3;
}

.w-dropdown-link:focus {
    outline: 0;
}

@media screen and (max-width: 767px) {
    .w-nav-brand {
        padding-left: 10px;
    }
}

.w-lightbox-backdrop {
    cursor: auto;
    letter-spacing: normal;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    visibility: visible;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    color: #fff;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: rgba(0, 0, 0, .9);
    outline: 0;
    font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    list-style: disc;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: translate(0);
}

.w-lightbox-backdrop,
.w-lightbox-container {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow: auto;
}

.w-lightbox-content {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.w-lightbox-view {
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
}

.w-lightbox-view:before {
    content: "";
    height: 100vh;
}

.w-lightbox-group,
.w-lightbox-group .w-lightbox-view,
.w-lightbox-group .w-lightbox-view:before {
    height: 86vh;
}

.w-lightbox-frame,
.w-lightbox-view:before {
    vertical-align: middle;
    display: inline-block;
}

.w-lightbox-figure {
    margin: 0;
    position: relative;
}

.w-lightbox-group .w-lightbox-figure {
    cursor: pointer;
}

.w-lightbox-img {
    width: auto;
    max-width: none;
    height: auto;
}

.w-lightbox-image {
    float: none;
    max-width: 100vw;
    max-height: 100vh;
    display: block;
}

.w-lightbox-group .w-lightbox-image {
    max-height: 86vh;
}

.w-lightbox-caption {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgba(0, 0, 0, .4);
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-lightbox-embed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.w-lightbox-control {
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    width: 4em;
    transition: all .3s;
    position: absolute;
    top: 0;
}

.w-lightbox-left {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
    display: none;
    bottom: 0;
    left: 0;
}

.w-lightbox-right {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
    display: none;
    bottom: 0;
    right: 0;
}

.w-lightbox-close {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
    background-size: 18px;
    height: 2.6em;
    right: 0;
}

.w-lightbox-strip {
    white-space: nowrap;
    padding: 0 1vh;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    overflow-y: hidden;
}

.w-lightbox-item {
    box-sizing: content-box;
    cursor: pointer;
    width: 10vh;
    padding: 2vh 1vh;
    display: inline-block;
    -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
    opacity: .3;
}

.w-lightbox-thumbnail {
    background: #222;
    height: 10vh;
    position: relative;
    overflow: hidden;
}

.w-lightbox-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
    height: 100%;
    left: 50%;
    transform: translate(-50%);
}

.w-lightbox-spinner {
    box-sizing: border-box;
    border: 5px solid rgba(0, 0, 0, .4);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50%;
    left: 50%;
}

.w-lightbox-spinner:after {
    content: "";
    border: 3px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
}

.w-lightbox-hide {
    display: none;
}

.w-lightbox-noscroll {
    overflow: hidden;
}

@media (min-width: 768px) {
    .w-lightbox-content {
        height: 96vh;
        margin-top: 2vh;
    }
    .w-lightbox-view,
    .w-lightbox-view:before {
        height: 96vh;
    }
    .w-lightbox-group,
    .w-lightbox-group .w-lightbox-view,
    .w-lightbox-group .w-lightbox-view:before {
        height: 84vh;
    }
    .w-lightbox-image {
        max-width: 96vw;
        max-height: 96vh;
    }
    .w-lightbox-group .w-lightbox-image {
        max-width: 82.3vw;
        max-height: 84vh;
    }
    .w-lightbox-left,
    .w-lightbox-right {
        opacity: .5;
        display: block;
    }
    .w-lightbox-close {
        opacity: .8;
    }
    .w-lightbox-control:hover {
        opacity: 1;
    }
}

.w-lightbox-inactive,
.w-lightbox-inactive:hover {
    opacity: 0;
}

.w-richtext:before,
.w-richtext:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-richtext:after {
    clear: both;
}

.w-richtext[contenteditable="true"]:before,
.w-richtext[contenteditable="true"]:after {
    white-space: initial;
}

.w-richtext ol,
.w-richtext ul {
    overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,
.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after,
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,
.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
    outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video>div:after,
.w-richtext figure[data-rt-type="video"]>div:after {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.w-richtext figure {
    max-width: 60%;
    position: relative;
}

.w-richtext figure>div:before {
    cursor: default !important;
}

.w-richtext figure img {
    width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
    opacity: .6;
}

.w-richtext figure div {
    color: rgba(0, 0, 0, 0);
    font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image,
.w-richtext figure[data-rt-type="image"] {
    display: table;
}

.w-richtext figure.w-richtext-figure-type-image>div,
.w-richtext figure[data-rt-type="image"]>div {
    display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image>figcaption,
.w-richtext figure[data-rt-type="image"]>figcaption {
    caption-side: bottom;
    display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video,
.w-richtext figure[data-rt-type="video"] {
    width: 60%;
    height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe,
.w-richtext figure[data-rt-type="video"] iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.w-richtext figure.w-richtext-figure-type-video>div,
.w-richtext figure[data-rt-type="video"]>div {
    width: 100%;
}

.w-richtext figure.w-richtext-align-center {
    clear: both;
    margin-left: auto;
    margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,
.w-richtext figure.w-richtext-align-center[data-rt-type="image"]>div {
    max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
    clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
    text-align: center;
    clear: both;
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.w-richtext figure.w-richtext-align-fullwidth>div {
    padding-bottom: inherit;
    display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth>figcaption {
    display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
    float: left;
    clear: none;
    margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
    float: right;
    clear: none;
    margin-left: 15px;
}

.w-nav {
    z-index: 1000;
    background: #ddd;
    position: relative;
}

.w-nav:before,
.w-nav:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-nav:after {
    clear: both;
}

.w-nav-brand {
    float: left;
    color: #333;
    text-decoration: none;
    position: relative;
}

.w-nav-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    position: relative;
}

.w-nav-link.w--current {
    color: #0082f3;
}

.w-nav-menu {
    float: right;
    position: relative;
}

[data-nav-menu-open] {
    text-align: center;
    background: #c8c8c8;
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block !important;
}

.w--nav-link-open {
    display: block;
    position: relative;
}

.w-nav-overlay {
    width: 100%;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
    top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
    width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
    width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    left: auto;
}

.w-nav-button {
    float: right;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 18px;
    font-size: 24px;
    display: none;
    position: relative;
}

.w-nav-button:focus {
    outline: 0;
}

.w-nav-button.w--open {
    color: #fff;
    background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
    display: none;
}

.w-nav[data-collapse="all"] .w-nav-button,
.w--nav-dropdown-open,
.w--nav-dropdown-toggle-open {
    display: block;
}

.w--nav-dropdown-list-open {
    position: static;
}

@media screen and (max-width: 991px) {
    .w-nav[data-collapse="medium"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="medium"] .w-nav-button {
        display: block;
    }
}

@media screen and (max-width: 767px) {
    .w-nav[data-collapse="small"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="small"] .w-nav-button {
        display: block;
    }
    .w-nav-brand {
        padding-left: 10px;
    }
}

@media screen and (max-width: 479px) {
    .w-nav[data-collapse="tiny"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="tiny"] .w-nav-button {
        display: block;
    }
}

.w-tabs {
    position: relative;
}

.w-tabs:before,
.w-tabs:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-tabs:after {
    clear: both;
}

.w-tab-menu {
    position: relative;
}

.w-tab-link {
    vertical-align: top;
    text-align: left;
    cursor: pointer;
    color: #222;
    background-color: #ddd;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    position: relative;
}

.w-tab-link.w--current {
    background-color: #c8c8c8;
}

.w-tab-link:focus {
    outline: 0;
}

.w-tab-content {
    display: block;
    position: relative;
    overflow: hidden;
}

.w-tab-pane {
    display: none;
    position: relative;
}

.w--tab-active {
    display: block;
}

@media screen and (max-width: 479px) {
    .w-tab-link {
        display: block;
    }
}

.w-ix-emptyfix:after {
    content: "";
}

@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.w-dyn-empty {
    background-color: #ddd;
    padding: 10px;
}

.w-dyn-hide,
.w-dyn-bind-empty,
.w-condition-invisible {
    display: none !important;
}

.wf-layout-layout {
    display: grid;
}

:root {
    --primary: #de30d7;
    --light-grey: #fafafa;
    --light-blue-bg: rgba(255, 255, 255, .1);
    --link-bg-grey: #f1f1f1;
    --text-color: rgba(255, 255, 255, .8);
    --dim-grey: #c5c5c5;
    --secondary: #59c2ea;
    --misty-rose: #ffdede;
    --border-color: #444;
    --bg-grey: #d4d4d4;
    --notification-bg: rgba(255, 255, 204, .53);
    --h1-desktop-size: 85px;
    --h1-tablet-size: 55px;
    --hero-grid-display-size: 0vw;
    --hero-grid-display-size-2: 0vw;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.w-layout-layout {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-auto-columns: 1fr;
    justify-content: center;
    padding: 20px;
}

.w-layout-cell {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.w-commerce-commercecartwrapper {
    display: inline-block;
    position: relative;
}

.w-commerce-commercecartopenlink {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercecartopenlinkcount {
    color: #3898ec;
    text-align: center;
    background-color: #fff;
    border-radius: 9px;
    min-width: 18px;
    height: 18px;
    margin-left: 8px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    display: inline-block;
}

.w-commerce-commercecartcontainerwrapper {
    z-index: 1001;
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.w-commerce-commercecartcontainerwrapper--cartType-modal {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-leftSidebar {
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-rightSidebar {
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-leftDropdown {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 100%;
    bottom: auto;
    left: 0;
    right: auto;
}

.w-commerce-commercecartcontainerwrapper--cartType-rightDropdown {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 100%;
    bottom: auto;
    left: auto;
    right: 0;
}

.w-commerce-commercecartcontainer {
    background-color: #fff;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    display: flex;
    overflow: auto;
    box-shadow: 0 5px 25px rgba(0, 0, 0, .25);
}

.w-commerce-commercecartheader {
    border-bottom: 1px solid #e6e6e6;
    flex: none;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    display: flex;
    position: relative;
}

.w-commerce-commercecartheading {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
}

.w-commerce-commercecartcloselink {
    width: 16px;
    height: 16px;
}

.w-commerce-commercecartformwrapper {
    flex-direction: column;
    flex: 1;
    display: flex;
}

.w-commerce-commercecartform {
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    display: flex;
}

.w-commerce-commercecartlist {
    -webkit-overflow-scrolling: touch;
    flex: 1;
    padding: 12px 24px;
    overflow: auto;
}

.w-commerce-commercecartitem {
    align-items: flex-start;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
}

.w-commerce-commercecartitemimage {
    width: 60px;
    height: 0%;
}

.w-commerce-commercecartiteminfo {
    flex-direction: column;
    flex: 1;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
}

.w-commerce-commercecartproductname {
    font-weight: 700;
}

.w-commerce-commercecartoptionlist {
    margin-bottom: 0;
    padding-left: 0;
    text-decoration: none;
    list-style-type: none;
}

.w-commerce-commercecartquantity {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 6px 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecartquantity::placeholder {
    color: #999;
}

.w-commerce-commercecartquantity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecartfooter {
    border-top: 1px solid #e6e6e6;
    flex-direction: column;
    flex: none;
    padding: 16px 24px 24px;
    display: flex;
}

.w-commerce-commercecartlineitem {
    flex: none;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 16px;
    display: flex;
}

.w-commerce-commercecartordervalue {
    font-weight: 700;
}

.w-commerce-commercecartapplepaybutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #000;
    border-width: 0;
    border-radius: 2px;
    align-items: center;
    height: 38px;
    min-height: 30px;
    margin-bottom: 8px;
    padding: 0;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercecartapplepayicon {
    width: 100%;
    height: 50%;
    min-height: 20px;
}

.w-commerce-commercecartquickcheckoutbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #000;
    border-width: 0;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    height: 38px;
    margin-bottom: 8px;
    padding: 0 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercequickcheckoutgoogleicon,
.w-commerce-commercequickcheckoutmicrosofticon {
    margin-right: 8px;
    display: block;
}

.w-commerce-commercecartcheckoutbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    text-align: center;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 2px;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: block;
}

.w-commerce-commercecartemptystate {
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
}

.w-commerce-commercecarterrorstate {
    background-color: #ffdede;
    flex: none;
    margin: 0 24px 24px;
    padding: 10px;
}

.w-commerce-commercecheckoutformcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercelayoutcontainer {
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.w-commerce-commercelayoutmain {
    flex: 0 800px;
    margin-right: 20px;
}

.w-commerce-commercecheckoutcustomerinfowrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutblockheader {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 20px;
    display: flex;
}

.w-commerce-commercecheckoutblockcontent {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    padding: 20px;
}

.w-commerce-commercecheckoutlabel {
    margin-bottom: 8px;
}

.w-commerce-commercecheckoutemailinput {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutemailinput::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutemailinput:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingaddresswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingfullname {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingfullname::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingfullname:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddress {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstreetaddress::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddress:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutrow {
    margin-left: -8px;
    margin-right: -8px;
    display: flex;
}

.w-commerce-commercecheckoutcolumn {
    flex: 1;
    padding-left: 8px;
    padding-right: 8px;
}

.w-commerce-commercecheckoutshippingcity {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingcity::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingcity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstateprovince {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstateprovince::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstateprovince:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingzippostalcode {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingzippostalcode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingzippostalcode:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingcountryselector {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingcountryselector::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingcountryselector:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingmethodswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingmethodslist {
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
}

.w-commerce-commercecheckoutshippingmethoditem {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 0;
    padding: 16px;
    font-weight: 400;
    display: flex;
}

.w-commerce-commercecheckoutshippingmethoddescriptionblock {
    flex-direction: column;
    flex-grow: 1;
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
}

.w-commerce-commerceboldtextblock {
    font-weight: 700;
}

.w-commerce-commercecheckoutshippingmethodsemptystate {
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    padding: 64px 16px;
}

.w-commerce-commercecheckoutpaymentinfowrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutcardnumber {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardnumber::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardnumber:focus,
.w-commerce-commercecheckoutcardnumber.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutcardexpirationdate {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardexpirationdate::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardexpirationdate:focus,
.w-commerce-commercecheckoutcardexpirationdate.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutcardsecuritycode {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardsecuritycode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardsecuritycode:focus,
.w-commerce-commercecheckoutcardsecuritycode.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingaddresstogglewrapper {
    flex-direction: row;
    display: flex;
}

.w-commerce-commercecheckoutbillingaddresstogglecheckbox {
    margin-top: 4px;
}

.w-commerce-commercecheckoutbillingaddresstogglelabel {
    margin-left: 8px;
    font-weight: 400;
}

.w-commerce-commercecheckoutbillingaddresswrapper {
    margin-top: 16px;
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutbillingfullname {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingfullname::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingfullname:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddress {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstreetaddress::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddress:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingcity {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingcity::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingcity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstateprovince {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstateprovince::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstateprovince:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingzippostalcode {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingzippostalcode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingzippostalcode:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingcountryselector {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingcountryselector::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingcountryselector:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutorderitemswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryblockheader {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 20px;
    display: flex;
}

.w-commerce-commercecheckoutorderitemslist {
    margin-bottom: -20px;
}

.w-commerce-commercecheckoutorderitem {
    margin-bottom: 20px;
    display: flex;
}

.w-commerce-commercecheckoutorderitemdescriptionwrapper {
    flex-grow: 1;
    margin-left: 16px;
    margin-right: 16px;
}

.w-commerce-commercecheckoutorderitemquantitywrapper {
    white-space: pre-wrap;
    display: flex;
}

.w-commerce-commercecheckoutorderitemoptionlist {
    margin-bottom: 0;
    padding-left: 0;
    text-decoration: none;
    list-style-type: none;
}

.w-commerce-commercelayoutsidebar {
    flex: 0 0 320px;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
}

.w-commerce-commercecheckoutordersummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummarylineitem,
.w-commerce-commercecheckoutordersummaryextraitemslistitem {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
    display: flex;
}

.w-commerce-commercecheckoutsummarytotal {
    font-weight: 700;
}

.w-commerce-commercecheckoutplaceorderbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    text-align: center;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 3px;
    align-items: center;
    margin-bottom: 20px;
    padding: 9px 15px;
    text-decoration: none;
    display: block;
}

.w-commerce-commercecheckouterrorstate {
    background-color: #ffdede;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 16px;
}

.w-commerce-commerceaddtocartform {
    margin: 0 0 15px;
}

.w-commerce-commerceaddtocartoptionpillgroup {
    margin-bottom: 10px;
    display: flex;
}

.w-commerce-commerceaddtocartoptionpill {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 10px;
    padding: 8px 15px;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-selected {
    color: #fff;
    background-color: #000;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commerceaddtocartquantityinput {
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 6px 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commerceaddtocartquantityinput::placeholder {
    color: #999;
}

.w-commerce-commerceaddtocartquantityinput:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commerceaddtocartbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commerceaddtocartbutton.w--ecommerce-add-to-cart-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commerceaddtocartoutofstock {
    background-color: #ddd;
    margin-top: 10px;
    padding: 10px;
}

.w-commerce-commerceaddtocarterror {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
}

.w-commerce-commercebuynowbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    margin-top: 10px;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block;
}

.w-commerce-commercebuynowbutton.w--ecommerce-buy-now-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commerceorderconfirmationcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercecheckoutcustomerinfosummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryitem,
.w-commerce-commercecheckoutsummarylabel {
    margin-bottom: 8px;
}

.w-commerce-commercecheckoutsummaryflexboxdiv {
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
}

.w-commerce-commercecheckoutsummarytextspacingondiv {
    margin-right: .33em;
}

.w-commerce-commercecheckoutshippingsummarywrapper,
.w-commerce-commercecheckoutpaymentsummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercepaypalcheckoutformcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercepaypalcheckouterrorstate {
    background-color: #ffdede;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 16px;
}

@media screen and (max-width: 767px) {
    .w-commerce-commercelayoutcontainer {
        flex-direction: column;
        align-items: stretch;
    }
    .w-commerce-commercelayoutmain {
        flex-basis: auto;
        margin-right: 0;
    }
    .w-commerce-commercelayoutsidebar {
        flex-basis: auto;
    }
}

@media screen and (max-width: 479px) {
    .w-commerce-commercecartcontainerwrapper--cartType-modal {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
    }
    .w-commerce-commercecartcontainerwrapper--cartType-leftDropdown,
    .w-commerce-commercecartcontainerwrapper--cartType-rightDropdown {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        display: flex;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .w-commerce-commercecartquantity,
    .w-commerce-commercecheckoutemailinput,
    .w-commerce-commercecheckoutshippingfullname,
    .w-commerce-commercecheckoutshippingstreetaddress,
    .w-commerce-commercecheckoutshippingstreetaddressoptional {
        font-size: 16px;
    }
    .w-commerce-commercecheckoutrow {
        flex-direction: column;
    }
    .w-commerce-commercecheckoutshippingcity,
    .w-commerce-commercecheckoutshippingstateprovince,
    .w-commerce-commercecheckoutshippingzippostalcode,
    .w-commerce-commercecheckoutshippingcountryselector,
    .w-commerce-commercecheckoutcardnumber,
    .w-commerce-commercecheckoutcardexpirationdate,
    .w-commerce-commercecheckoutcardsecuritycode,
    .w-commerce-commercecheckoutbillingfullname,
    .w-commerce-commercecheckoutbillingstreetaddress,
    .w-commerce-commercecheckoutbillingstreetaddressoptional,
    .w-commerce-commercecheckoutbillingcity,
    .w-commerce-commercecheckoutbillingstateprovince,
    .w-commerce-commercecheckoutbillingzippostalcode,
    .w-commerce-commercecheckoutbillingcountryselector,
    .w-commerce-commerceaddtocartquantityinput {
        font-size: 16px;
    }
}

body {
    color: #fff;
    background-color: #000;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
}

h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 72px;
    font-weight: 600;
    line-height: 1.2;
}

h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 62px;
    font-weight: 600;
    line-height: 1.2;
}

h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 50px;
    font-weight: 600;
    line-height: 1.2;
}

h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
}

h5 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
}

h6 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Manrope, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
}

p {
    letter-spacing: .7px;
    margin-bottom: 10px;
}

a {
    color: #fff;
    text-decoration: none;
    transition: color .35s;
}

a:hover {
    color: rgba(255, 255, 255, .9);
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
}

label {
    margin-bottom: 5px;
    font-weight: 400;
    display: block;
}

strong {
    font-weight: 600;
}

sup {
    font-size: 60%;
}

blockquote {
    color: var(--primary);
    border-left: 0 #e2e2e2;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 50px 10px;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.4;
}

.section {
    z-index: 1;
    background-color: #000;
    position: relative;
}

.section.dark-section {
    color: #fff;
    background-color: #181818;
}

.section.overflow-hidden {
    overflow: hidden;
}

.container {
    width: 100%;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 5em 2em;
}

.container.nav-container {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    width: 100%;
    max-width: none;
    height: 100%;
    padding: 0 1em;
    position: relative;
}

.container.hero-container {
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.container.big-container {
    max-width: none;
    padding-top: 0;
}

.container.no-padding-top {
    padding-top: 0;
}

.container.secondary-page-container {
    z-index: 2;
    flex-flow: column;
    flex: 1;
    height: 100%;
    padding-bottom: 18vw;
    display: flex;
    position: relative;
}

.nav-menu-container {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
}

.navbar {
    z-index: 99;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 70px;
    padding-left: 10px;
    padding-right: 10px;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    bottom: auto;
    left: 0%;
    right: 0%;
}

.hero-section {
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -70px;
    padding-top: 70px;
    display: flex;
    position: relative;
}

.nav-menu {
    z-index: 1;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    position: absolute;
    bottom: auto;
    left: 0%;
    right: 0%;
}

.nav-menu.right-padding {
    padding-right: 5.4em;
}

.flex-center-text {
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.grid-6-col {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid;
}

.no-margins {
    margin-top: 0;
    margin-bottom: 0;
}

.grid-4-col {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.grid-2-col {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-rows: auto;
}

.utility-page-wrap {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    margin-top: -70px;
    padding-top: 90px;
    display: flex;
}

.utility-page-content {
    text-align: center;
    flex-direction: column;
    display: flex;
}

.utility-page-form {
    flex-direction: column;
    align-items: stretch;
    display: flex;
}

.footer-link {
    z-index: 1;
    color: rgba(255, 255, 255, .7);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    transition: color .4s;
    position: relative;
    overflow: hidden;
}

.footer-link:hover {
    color: #fff;
}

.link-block-underline {
    background-color: #8d8d8d;
    width: 100%;
    height: 1px;
    margin-top: 2px;
}

.footer {
    z-index: 1;
    background-color: #000;
    border-top: 1px solid rgba(68, 68, 68, .5);
    align-items: flex-start;
    padding-top: 1em;
    padding-bottom: 10px;
    padding-right: 0;
    position: relative;
}

.footer-content {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    text-align: left;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    margin-bottom: 3em;
    display: grid;
}

.footer-logo-link {
    opacity: 1;
    flex: 0 auto;
    transition-property: opacity;
    display: inline-block;
}

.footer-logo-link:hover {
    opacity: .8;
}

.footer-image {
    width: 100%;
    max-width: 120px;
}

.footer-heading {
    color: rgba(255, 255, 255, .5);
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 500;
}

.made-by-section {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    justify-content: space-between;
    margin-top: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: flex;
    overflow: hidden;
}

.nav-link-holder,
.nav-link-holder.nav-button-holder {
    padding-left: 10px;
}

.content.relative {
    position: relative;
}

.contact-form-grid {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid;
}

.field-label {
    color: rgba(255, 255, 255, .3);
    font-size: 18px;
    font-weight: 400;
}

.success-message {
    border: 1px solid var(--primary);
    background-color: rgba(255, 255, 255, .1);
    border-radius: 8px;
    padding: 1em;
}

.error-message {
    text-align: left;
    background-color: rgba(255, 222, 222, .2);
    border-style: none;
    border-width: 0;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 1em;
    padding: 10px;
    font-size: 14px;
}

.instructions-image {
    border-radius: 12px;
    width: 100%;
    margin-top: 1em;
}

.change-log-container {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    font-size: 16px;
    display: flex;
}

.menu-button {
    z-index: 2;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    padding: 4px 5px 5px;
    transition: background-color .35s;
}

.menu-button:hover,
.menu-button.w--open {
    background-color: var(--link-bg-grey);
}

.copyright-text {
    color: rgba(255, 255, 255, .7);
    line-height: 1.4;
}

.copyright-link {
    color: #fff;
    margin-right: 5px;
    padding-left: 0;
    font-weight: 500;
}

.copyright-link:hover {
    color: var(--primary);
}

.rich-text {
    color: var(--text-color);
    width: 100%;
    max-width: 720px;
    line-height: 1.6;
}

.rich-text h5 {
    letter-spacing: .5px;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
}

.rich-text strong {
    font-weight: 600;
}

.rich-text a {
    border-bottom: 1px solid #323232;
    line-height: 1.6;
    text-decoration: none;
    transition-property: all;
}

.rich-text a:hover {
    color: var(--primary);
    border-bottom-color: rgba(50, 50, 50, 0);
    text-decoration: none;
}

.rich-text figure {
    background-color: var(--light-blue-bg);
    border-radius: 3px;
    width: 100%;
    min-width: 100%;
    margin-top: 3em;
    margin-bottom: 4em;
    padding: 30px;
}

.rich-text ul {
    margin-top: 30px;
    margin-bottom: 24px;
    padding-left: 32px;
}

.rich-text h3 {
    letter-spacing: .5px;
    margin-top: 30px;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
}

.rich-text img {
    width: 100%;
    min-width: 100%;
}

.rich-text figcaption {
    color: rgba(255, 255, 255, .8);
    letter-spacing: .2px;
    font-size: 14px;
    line-height: 24px;
}

.rich-text h1 {
    letter-spacing: .5px;
    margin-top: 3rem;
    margin-bottom: 1.3rem;
    font-size: 40px;
    font-weight: 600;
}

.rich-text p {
    letter-spacing: .2px;
    margin-top: 16px;
    margin-bottom: 28px;
    font-size: 16px;
    line-height: 1.6;
}

.rich-text h2 {
    letter-spacing: .5px;
    margin-top: 3rem;
    margin-bottom: 1.3rem;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
}

.rich-text ol {
    margin-top: 30px;
    margin-bottom: 24px;
    padding-left: 32px;
}

.rich-text h4 {
    letter-spacing: .5px;
    margin-top: 30px;
    margin-bottom: 16px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.3;
}

.rich-text h6 {
    letter-spacing: .5px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
}

.rich-text li {
    letter-spacing: .2px;
    margin-bottom: 12px;
}

.style-guide-tab-holder {
    color: rgba(255, 255, 255, .6);
    border-radius: 5px;
    width: 100%;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 400;
    transition-property: background-color;
    transition-duration: .675s;
}

.style-guide-tab-holder:hover {
    color: rgba(255, 255, 255, .8);
    background-color: rgba(0, 0, 0, .4);
}

.style-guide-tab-holder.w--current {
    color: #fff;
    background-color: #000;
}

.style-guide-left-panel-holder {
    background-color: var(--light-blue-bg);
    align-items: flex-start;
    width: 405px;
    display: flex;
}

.style-guide-title-holder {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.hero-text {
    margin-top: 0;
    font-size: 70px;
    font-weight: 600;
}

.hero-text.demo-hero-text {
    max-width: 700px;
}

.paragraph-m {
    font-size: 24px;
    line-height: 1.2;
}

.style-guide-gray-background {
    background-color: var(--light-blue-bg);
    border-radius: 12px;
}

.style-guide-left-panel {
    grid-row-gap: 25px;
    flex-direction: column;
    width: 100%;
    padding: 2em;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
}

.subscribe-button {
    color: #fff;
    background-color: #222;
    border: 0 solid #000;
    border-radius: 0 3px 3px 0;
    width: 100px;
    height: auto;
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
    transition: background-color .35s;
    position: absolute;
    top: 1px;
    bottom: 1px;
    right: 1px;
}

.subscribe-button:hover {
    background-color: var(--primary);
}

.headings-container {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    flex-direction: column;
    margin-top: 30px;
    display: flex;
}

.link-block-23 {
    color: #000;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    transition: color .4s;
}

.link-block-23:hover {
    color: #000;
}

.link-block-23.animation-03 {
    overflow: hidden;
}

.grid-holder {
    grid-row-gap: 30px;
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    display: flex;
}

.colors-container {
    background-color: var(--light-blue-bg);
}

.subscribe-form-holder {
    width: 100%;
    max-width: 340px;
    margin-bottom: 0;
}

.style-guide-small-title {
    color: rgba(255, 255, 255, .5);
    font-size: 16px;
    font-weight: 600;
}

.paragraph-container {
    width: 80%;
    margin-top: 10px;
}

.colors-holder {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    display: flex;
}

.button-grid {
    grid-column-gap: 30px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2em;
    display: grid;
}

.font-details-holder {
    grid-row-gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
}

.aa-font {
    font-size: 130px;
}

.style-guide-empty-container {
    padding: 2em 2em 2em 1em;
}

.font-holder {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    justify-content: space-between;
    margin-top: 2em;
    padding: 2em;
    display: flex;
}

.button {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    background-color: var(--primary);
    color: #fff;
    text-transform: none;
    border-radius: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    font-weight: 500;
    transition: box-shadow .4s, color .35s, background-color .35s, transform .5s cubic-bezier(.175, .885, .32, 1.275);
    display: flex;
    box-shadow: inset 0 -10px 30px rgba(89, 194, 234, .33);
}

.button:hover {
    color: #fff;
    box-shadow: inset 0 -20px 40px #59c2ea;
}

.button.with-icon {
    text-align: left;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6eb_Menu%20White%20Arrow.png");
    background-position: 84%;
    background-repeat: no-repeat;
    background-size: 13px;
    padding-left: 20px;
    padding-right: 40px;
}

.button.white-button {
    color: #000;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .1);
}

.button.white-button:hover {
    background-color: #d3d3d3;
}

.button.transparent-on-dark {
    background-color: rgba(255, 255, 255, .05);
}

.button.transparent-on-dark:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
}

.button.nav-button {
    padding: 8px 15px;
    position: relative;
}

.button.second-button {
    z-index: 33;
    background-color: var(--primary);
    color: #fff;
    position: relative;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .6), inset 0 0 30px rgba(89, 194, 234, 0);
}

.button.second-button:hover {
    background-color: var(--primary);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .8), inset 0 -50px 30px #59c2ea;
}

.button.big-button {
    font-size: 24px;
}

.button.big-add-to-cart {
    background-color: #000;
    font-size: 30px;
}

.borders {
    border: 1px solid var(--dim-grey);
    opacity: 1;
    border-radius: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
}

.borders.center {
    height: 100px;
}

.button-holder {
    grid-row-gap: 30px;
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    display: flex;
}

.subscribe-form {
    z-index: 1;
    width: 100%;
    position: relative;
}

.style-guide-main-panel {
    width: 100%;
    height: 100%;
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
}

.headings-holder {
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    display: flex;
}

.subscribe-email {
    color: #fff;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 3px;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 10px 109px 10px 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    transition: background-color .35s, border-color .35s;
}

.subscribe-email:hover {
    background-color: #080808;
}

.subscribe-email:focus {
    border-color: var(--primary);
    background-color: #080808;
}

.subscribe-email::placeholder {
    color: rgba(255, 255, 255, .5);
}

.sg---color-primary {
    background-color: var(--primary);
    width: 190px;
    height: 150px;
}

.sg---color-primary.secondary-color {
    background-color: var(--secondary);
}

.sg---color-primary.black {
    background-color: var(--text-color);
}

.style-guide-container {
    display: flex;
}

.style-guide-panel-title {
    color: rgba(255, 255, 255, .4);
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
}

.font-light {
    font-size: 24px;
    font-weight: 300;
}

.font-light.bold-text {
    font-weight: 700;
}

.sg---color-description {
    grid-row-gap: 2px;
    background-color: var(--light-blue-bg);
    flex-direction: column;
    padding: 15px;
    display: flex;
}

.style-guide-hero-holder {
    grid-row-gap: 20px;
    flex-direction: column;
    padding: 2em;
    display: flex;
}

._404-content {
    margin-bottom: 0;
}

.brand-logo {
    max-width: 150px;
    height: 100%;
    max-height: 30px;
}

.brand-link {
    z-index: 2;
    margin-left: 0;
    padding-left: 0;
    transition-property: opacity;
    position: relative;
}

.brand-link:hover {
    opacity: .9;
}

.nav-link {
    z-index: 1;
    color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    display: flex;
    position: relative;
}

.nav-link:hover {
    color: rgba(255, 255, 255, .9);
}

.nav-link.w--current {
    color: #fff;
}

.nav-link.nav-link-dropdown {
    color: #fff;
    text-align: center;
    padding-right: 25px;
}

.nav-link.nav-link-dropdown:hover {
    color: rgba(255, 255, 255, .9);
}

.nav-link.white-nav-link {
    color: #fff;
    justify-content: flex-start;
    align-items: flex-start;
}

.link-background {
    z-index: -1;
    background-color: var(--light-blue-bg);
    background-image: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 0;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.link-background.link-bg-on-dark {
    background-color: rgba(255, 255, 255, .15);
}

.hero-section-secondary {
    z-index: 2;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 100vh;
    margin-top: -70px;
    padding-top: 90px;
    display: flex;
    position: relative;
    overflow: hidden;
}

.hero-section-secondary.height-auto {
    min-height: auto;
}

.hero-section-secondary.no-padding {
    padding-top: 0;
}

.hero-section-secondary.no-padding.speaker-detail {
    overflow: visible;
}

.hero-text-secondary {
    margin-top: 0;
}

.hero-description-short-container {
    max-width: 60%;
}

.richtext-centered {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.footer-brand-content {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.footer-description {
    max-width: 260px;
    font-size: 14px;
}

.social-media-icons {
    grid-column-gap: 5px;
    grid-row-gap: 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.social-media-link {
    z-index: 1;
    border-radius: 6px;
    padding: 9px;
    position: relative;
}

.social-media-icon {
    filter: invert(130%);
    width: 20px;
    height: 20px;
}

.hero-description {
    color: var(--text-color);
    max-width: 450px;
    margin-bottom: 20px;
    font-size: 22px;
}

.hero-content {
    z-index: 2;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
}

.contact-form-content {
    flex-direction: column;
    display: block;
}

.contact-form {
    max-width: 500px;
}

.input-field {
    color: #fff;
    -webkit-text-fill-color: inherit;
    background-color: rgba(255, 255, 255, .1);
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .02);
    border-radius: 8px;
    margin-bottom: 0;
    padding: 30px 15px;
    font-size: 16px;
    line-height: 1;
    transition: all .5s;
}

.input-field:hover {
    background-color: rgba(255, 255, 255, .15);
}

.input-field:focus {
    border-color: var(--primary);
    background-color: rgba(255, 255, 255, .04);
}

.input-field::placeholder {
    color: rgba(255, 255, 255, .4);
}

.input-field.textarea-field {
    height: auto;
    min-height: 120px;
    padding-top: 15px;
}

.link {
    z-index: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    display: flex;
    position: relative;
}

.link:hover,
.link.w--current {
    color: #000;
}

.link-with-line {
    z-index: 1;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color .4s;
    position: relative;
    overflow: hidden;
}

.link-with-line:hover {
    color: #000;
}

.link-color:hover {
    color: var(--primary);
}

.link-content {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.external-icon {
    width: 16px;
}

.license-box {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 2em;
    padding: 2em;
    display: flex;
}

.license-box-top {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.grid-grey-content {
    background-color: #fff;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 80px;
    padding: 1em;
    display: flex;
}

.client-logo {
    object-fit: contain;
    width: 100%;
    max-width: 140px;
    height: 100%;
    max-height: 25px;
}

.ikonik-icons-image {
    width: 100%;
}

.instruction-item {
    background-color: var(--light-blue-bg);
    border-radius: 12px;
    padding: 2em;
}

.instructions-list {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
}

.trusted-by-container {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.trusted-by-grid-content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    padding: 1em;
    display: flex;
}

.trusted-by-text {
    text-align: center;
    font-size: 16px;
}

.section-background {
    z-index: -1;
    background-color: #000;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.footer-grid-content {
    display: block;
}

.footer-grid-content.second {
    margin-top: 2em;
}

.protected-input-holder {
    margin-bottom: 10px;
}

.blog-category-list {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.blog-item-link3 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
    display: flex;
}

.blog-item-image-holder {
    width: 100%;
    height: auto;
    padding-top: 70%;
    position: relative;
    overflow: hidden;
}

.blog-item-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.blog-wrapper {
    margin-top: 2em;
}

.blog-grid {
    grid-column-gap: 3em;
    grid-row-gap: 4em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.blog-item-content {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1em;
    display: flex;
}

.blog-item-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 22px;
}

.blog-item-summary {
    color: rgba(255, 255, 255, .8);
    margin-bottom: 0;
    display: none;
}

.blog-category-links-holder {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: 30px 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: start;
    margin-bottom: 2em;
    display: grid;
}

.post-image {
    width: 100%;
}

.blog-item-category {
    color: rgba(255, 255, 255, .5);
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 10px;
    display: flex;
}

.shop-wrapper {
    margin-top: 40px;
}

.shop-list {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid;
}

.shop-item {
    position: relative;
}

.product-add-to-cart-holder {
    z-index: 2;
    position: absolute;
    top: 1em;
    bottom: auto;
    left: auto;
    right: 1em;
}

.product-item {
    width: 100%;
}

.hide {
    display: none;
}

.add-to-cart-button {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    color: rgba(255, 255, 255, 0);
    background-color: rgba(0, 0, 0, .4);
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6ec_Cart%20Shop%20mage.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 20px;
    border: 1px solid rgba(255, 255, 255, .4);
    border-radius: 4px;
    justify-content: center;
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    padding: 0;
    transition: transform .45s, border-color .475s, background-color .475s;
}

.add-to-cart-button:hover {
    border-color: var(--primary);
}

.add-to-cart-button:active {
    transform: scale(.9);
}

.out-of-stock-state {
    background-color: var(--light-blue-bg);
    color: var(--text-color);
    padding: 5px;
}

.error-state {
    background-color: var(--misty-rose);
}

.nav-cart-holder {
    justify-content: flex-end;
    align-items: center;
    height: 38px;
    padding-left: 10px;
    padding-right: 1em;
    display: flex;
    position: absolute;
    top: auto;
    bottom: auto;
    left: auto;
    right: 0%;
}

.cart {
    z-index: 3;
    outline-offset: 0px;
    outline: 0 #000;
    height: 100%;
}

.cart-button {
    outline-offset: 0px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    outline: 0 #2b2b2b;
    height: 100%;
    padding: 5px 10px;
    transition-property: background-color;
    overflow: hidden;
}

.cart-image {
    filter: invert();
    width: 20px;
}

.cart-quantity {
    color: var(--text-color);
    background-color: rgba(255, 255, 255, .1);
    border-style: none;
    width: 50px;
    height: 30px;
    margin-bottom: 0;
    font-size: 14px;
    transition: color .35s, background-color .35s;
}

.cart-quantity:hover {
    background-color: var(--light-blue-bg);
}

.cart-quantity:focus {
    border-color: var(--primary);
}

.cart-wrapper {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
}

.cart-container {
    background-color: #000;
    border-radius: 8px;
    min-width: 700px;
    max-width: 700px;
    max-height: 600px;
    box-shadow: 0 5px 25px rgba(255, 255, 255, .25);
}

.cart-header {
    z-index: 5;
    border-bottom-color: var(--border-color);
    background-color: #000;
    padding: 1em;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

.cart-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
}

.cart-close-button {
    outline-offset: 0px;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 100px;
    outline: 0 #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    transition-property: opacity;
    display: flex;
}

.cart-close-button:hover {
    opacity: .7;
}

.cart-form-wrapper {
    justify-content: flex-start;
    align-items: stretch;
}

.cart-list {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 1em;
    display: flex;
}

.cart-item {
    min-height: 70px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
}

.cart-item-image {
    object-fit: cover;
    border-radius: 6px;
    width: 100px;
    height: 100px;
}

.cart-footer {
    z-index: 5;
    border-top-color: var(--border-color);
    background-color: #1d1d1d;
    padding: 1em;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
}

.remove-button {
    color: var(--dim-grey);
    font-size: 13px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: auto;
    right: 0%;
}

.remove-button:hover {
    color: #fa4d50;
}

.cart-item-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 500;
}

.cart-item-price {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
}

.cart-item-option-list {
    font-size: 14px;
}

.cart-item-option-text {
    font-size: 14px;
    font-weight: 400;
}

.cart-item-content {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    justify-content: center;
    align-items: flex-start;
    min-height: 70px;
    margin-left: 1em;
    margin-right: 1em;
}

.x-icon {
    filter: invert();
    width: 12px;
    height: auto;
}

.cart-subtotal-label {
    font-size: 16px;
}

.cart-subtotal-price {
    font-size: 16px;
    font-weight: 600;
}

.web-payments {
    margin-bottom: 1em;
}

.web-payments.no-web-payments-margins {
    margin-bottom: 0;
}

.cart-quantity-number {
    color: #fff;
    background-color: rgba(255, 255, 255, .2);
    margin-left: 2px;
    padding-left: 3px;
    padding-right: 3px;
    font-weight: 500;
}

.heading-title-holding {
    padding-bottom: 2em;
}

.product-details-grid {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
}

.product-other-images {
    margin-top: 1em;
}

.product-other-images-list {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.product-other-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.product-other-image-holder {
    border-radius: 5px;
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
}

.product-other-image-lightbox {
    background-color: var(--light-blue-bg);
    border-radius: 6px;
    width: 100%;
    padding: .7em;
    transition-property: background-color;
}

.product-other-image-lightbox:hover {
    background-color: rgba(255, 255, 255, .2);
}

.product-image-lightbox {
    width: 100%;
    transition-property: opacity;
    position: relative;
    overflow: hidden;
}

.product-image-lightbox:hover {
    opacity: .8;
}

.product-add-to-cart-default {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.product-quantity {
    background-color: rgba(250, 250, 250, .2);
    border-color: rgba(255, 255, 255, .3);
    border-radius: 3px;
    height: 100%;
    margin-bottom: 0;
    padding-top: 11px;
    padding-bottom: 11px;
}

.product-add-to-cart-quantity {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.sticky-content {
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
}

.checkout-form {
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
}

.checkout-container {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
}

.checkout-details {
    flex-basis: 100%;
}

.checkout-summary {
    top: 100px;
}

.checkout-box {
    background-color: rgba(255, 255, 255, .1);
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 8px;
    margin-top: 0;
    margin-bottom: 2em;
}

.checkout-box.no-margins {
    margin-bottom: 0;
}

.checkout-heading {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 600;
}

.required-label {
    color: rgba(255, 255, 255, .5);
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12px;
}

.block-header {
    background-color: rgba(0, 0, 0, 0);
    border-style: none none solid;
    border-width: 0 0 1px;
    border-bottom-color: rgba(255, 255, 255, .2);
    align-items: center;
    padding: 1em;
}

.block-content {
    background-color: rgba(0, 0, 0, 0);
    border: 0 solid #000;
    padding: 1em;
}

.order-item-list {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 0;
    display: flex;
}

.order-item {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 0;
    padding-bottom: 1em;
}

.order-item:last-child {
    border-bottom-style: none;
    border-bottom-width: 0;
}

.order-item-image {
    object-fit: cover;
    width: 50px;
    height: 50px;
}

.order-item-title {
    color: var(--text-color);
    font-size: 14px;
    font-weight: 500;
}

.order-item-quantity-holder {
    opacity: .7;
    color: var(--text-color);
}

.order-item-price {
    font-size: 14px;
    font-weight: 500;
}

.checkout-input-field {
    color: #fff;
    -webkit-text-fill-color: inherit;
    background-color: rgba(255, 255, 255, .04);
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .02);
    border-bottom-color: rgba(255, 255, 255, .02);
    border-radius: 8px;
    height: 40px;
    margin-bottom: 1em;
    padding: 10px;
    line-height: 1;
    transition: border-color .35s, background-color .35s;
}

.checkout-input-field:hover {
    background-color: rgba(255, 255, 255, .02);
}

.checkout-input-field:focus,
.checkout-input-field.-wfp-focus {
    border-color: var(--primary);
    background-color: rgba(255, 255, 255, .04);
}

.checkout-input-field::placeholder {
    color: rgba(0, 0, 0, .4);
}

.checkout-input-field.no-margins {
    margin-bottom: 0;
}

.shipping-method-list {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    border: 1px #000;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
}

.shipping-method {
    background-color: rgba(255, 255, 255, 0);
    border-bottom-color: rgba(255, 255, 255, .2);
    padding: 0 0 1em 0;
}

.shipping-method:last-child {
    border-bottom-style: none;
    border-bottom-width: 0;
}

.order-summary-label {
    color: var(--text-color);
}

.order-summary-value {
    color: var(--text-color);
    font-size: 16px;
}

.order-line-item,
.extra-item {
    align-items: center;
    margin-bottom: 10px;
}

.order-item-content {
    margin-left: 0;
    margin-right: 0;
}

.order-item-full-content {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.shipping-method-title {
    font-weight: 500;
}

.shipping-method-description {
    color: rgba(255, 255, 255, .8);
    font-size: 12px;
}

.shipping-method-price {
    font-weight: 500;
}

.order-info-column {
    padding-left: 0;
    padding-right: 0;
}

.order-info-row {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    margin-left: 0;
    margin-right: 0;
}

.shipping-address {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}

.product-image {
    border-radius: 8px;
    width: 100%;
}

.no-shipping {
    color: var(--dim-grey);
    text-align: left;
    background-color: rgba(0, 0, 0, 0);
    border: 1px #000;
    padding: 1em 0;
    font-weight: 400;
}

.product-title {
    margin-top: 0;
    font-size: 42px;
}

.licensing-instruction-heading {
    margin-top: 0;
    font-size: 30px;
}

.product-category-wrapper {
    display: block;
}

.product-category-list {
    padding-bottom: 0;
}

.nav-dropdown {
    height: 100%;
    position: static;
}

.nav-dropdown-list {
    background-color: rgba(0, 0, 0, 0);
    padding-left: 2em;
    padding-right: 2em;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
}

.nav-dropdown-list-content {
    grid-column-gap: 0em;
    grid-row-gap: 0em;
    color: #fff;
    background-color: #111;
    border-radius: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    padding-top: 1em;
    padding-left: 3em;
    padding-right: 3em;
    display: flex;
    overflow: hidden;
}

.nav-dropdown-grid {
    grid-column-gap: 2.5em;
    grid-row-gap: 2.5em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 120px;
    width: 100%;
}

.nav-dropdown-footer {
    background-image: linear-gradient(rgba(17, 17, 17, 0), #111 79%);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 6em;
    padding-bottom: 3em;
    display: flex;
    position: relative;
}

.nav-dropdown-column {
    position: relative;
}

.nav-dropdown-heading {
    color: var(--bg-grey);
    text-transform: uppercase;
    margin-top: 2em;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
}

.nav-dropdown-item {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.nav-list {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-left: -15px;
    padding-left: 0;
    list-style-type: none;
    display: flex;
}

.whilte-link {
    color: #fff;
}

.whilte-link:hover {
    opacity: .8;
    color: #fff;
}

.nav-dropdown-line-abs {
    background-color: rgba(255, 255, 255, .2);
    width: 1px;
    display: block;
    position: absolute;
    top: -20%;
    bottom: -40%;
    left: auto;
    right: 0%;
}

.nav-menu-overlay-mobile {
    display: none;
}

.nav-dropdown-link-arrow {
    z-index: -3;
    background-color: #111;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
    transform: rotate(45deg);
}

.nav-dropdown-link-arrow-holder {
    z-index: -3;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 30px;
    display: none;
    position: absolute;
    top: auto;
    bottom: -20px;
    left: 0;
    right: 0;
    overflow: hidden;
}

.nav-dropdown-link-arrow-animated {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 16px;
    display: flex;
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.explore-more-grid {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    color: #fff;
    grid-template-rows: auto;
    max-width: 1050px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
}

.template-cta-content {
    flex-direction: column;
    align-items: center;
    display: flex;
}

.template-cta-image {
    margin-top: 2em;
}

.small-black-text {
    color: #000;
    font-size: 16px;
}

.small-content {
    width: 100%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5em;
}

.small-content.no-padding {
    padding-bottom: 0;
}

.white-70pct {
    color: rgba(255, 255, 255, .7);
}

.large-white-text {
    text-align: center;
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 500;
    line-height: 1.2;
}

.box-paragraph {
    text-align: center;
    text-wrap: balance;
}

.text-center {
    text-align: center;
    flex-direction: column;
    align-items: center;
    display: flex;
}

.main-logo {
    position: absolute;
    top: 17%;
    bottom: auto;
    left: 7%;
    right: auto;
}

.orange-box {
    background-color: #ff5e20;
    border-radius: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 0;
    display: flex;
    position: relative;
    overflow: hidden;
}

.hero-box-tittle {
    padding-left: 2em;
    padding-right: 2em;
}

.buy-now-link {
    background-color: #fff;
    border-radius: 6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 15px 30px 15px 60px;
    transition: background-color .35s;
    display: flex;
    position: relative;
}

.buy-now-link:hover {
    background-color: rgba(255, 255, 255, .83);
}

.blue-box {
    background-color: #3351f5;
    border-radius: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 0;
    display: flex;
    position: relative;
    overflow: hidden;
}

.feature-text {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    font-size: 39px;
    font-weight: 500;
    display: flex;
}

.template-includes-card {
    background-color: #181818;
    border: 1px solid #505050;
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 2em;
    display: flex;
    overflow: hidden;
}

.feature-box {
    background-color: #181818;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6aa_Wedoflow-3d-Icon.webp");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 40%;
    border: 1px solid #505050;
    border-radius: 12px;
    padding: 130px 45% 130px 70px;
    position: relative;
    overflow: hidden;
}

.text-gray-paragraph-holder-2 {
    padding-right: 34px;
}

.figma-file-image {
    object-fit: cover;
    object-position: 0% 0%;
    width: 100%;
    height: 100%;
}

.small-empty-space-in-text {
    width: 0;
    display: inline-block;
}

.template-more-things-grid {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin-top: 3em;
}

.white-link {
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition-property: border-color;
}

.white-link:hover {
    color: #fff;
    border-bottom-color: #fff;
}

.style-guide-image {
    width: 100%;
    margin-left: -2em;
}

.text-gray-paragraph-holder {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-direction: column;
    padding-right: 100px;
    display: flex;
}

.demo-cta-image {
    width: 100%;
    margin-top: 20px;
}

.notifications-image {
    width: 115%;
    max-width: none;
    margin-left: -2em;
}

.template-growth-features {
    font-size: 29px;
    font-weight: 500;
}

.demo-business-email-image {
    width: 100%;
    margin-top: 40px;
}

.figma-component-library-holder {
    background-color: #181818;
    border: 1px solid #505050;
    border-radius: 12px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 2em;
    padding-left: 3em;
    display: flex;
}

.demo-page-image-holder {
    background-color: var(--border-color);
    width: 100%;
    padding-top: 76%;
    transition: padding .35s;
    position: relative;
}

.main-page-title-badge {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
}

.demo-page-link {
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
}

.demo-page-link:hover {
    text-decoration: none;
}

.main-page-badge {
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
}

.demo-page-item-border {
    z-index: 1;
    background-color: rgba(255, 255, 255, .1);
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
}

.hero-page-image {
    object-fit: cover;
    object-position: 50% 0%;
    width: 100%;
    max-width: none;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.demo-pages-grid {
    grid-column-gap: 1em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
}

.template-included-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.template-included-image.template-styles-and-buttons {
    object-fit: contain;
}

.template-overlay {
    background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.template-overlay.grey-overlay-box {
    z-index: 2;
    background-image: linear-gradient(0deg, var(--border-color), rgba(0, 0, 0, .01) 100%, rgba(68, 68, 68, 0));
    height: 50%;
    top: auto;
}

.inside-box-text {
    text-align: center;
    font-size: 26px;
}

.template-includes-box {
    background-color: var(--border-color);
    border-radius: 6px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 0;
    display: flex;
    position: relative;
    overflow: hidden;
}

.template-included-image-holder {
    width: 100%;
    height: 70%;
    position: relative;
}

.grid-what-is-included {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
}

.grid-what-is-included-holder {
    width: 100%;
    margin-top: 50px;
}

.text-paragraph-holder {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 180px;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
}

.template-cards-wrapper {
    flex: none;
    justify-content: center;
    width: auto;
    display: flex;
}

.white-paragraph {
    color: #fff;
}

.template-footer-button-holder {
    max-width: 350px;
}

.template-button-holder {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 30px;
    display: flex;
}

.demo-container {
    flex-direction: column;
    width: 100%;
    display: flex;
}

.template-section {
    background-color: #111;
    border-radius: 42px;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .1);
}

.template-card-holder {
    flex-direction: row;
    flex: none;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 420px;
    min-height: 30vw;
    padding: 1%;
    display: flex;
    position: relative;
}

.template-card-image {
    height: 100%;
    position: relative;
    overflow: hidden;
}

.demo-blur-bg-effect {
    z-index: 0;
    background-image: linear-gradient(117deg, var(--primary), var(--secondary));
    opacity: 0;
    filter: blur(100px);
    width: 80%;
    height: 70%;
    position: absolute;
}

.integration-heading {
    font-size: 42px;
    font-weight: 500;
}

.template-footer-heading {
    color: #fff;
    width: 100%;
    max-width: 510px;
}

.demo-section {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 3em;
    padding-bottom: 6em;
    display: flex;
    overflow: hidden;
}

.template-hover-state {
    justify-content: center;
    align-items: center;
    height: 50%;
    display: flex;
    position: absolute;
    top: auto;
    bottom: -1%;
    left: -1%;
    right: -1%;
}

.template-footer-holder {
    justify-content: space-between;
    width: 100%;
    display: flex;
}

.template-card-image-holder {
    z-index: 1;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.hero-description-holder {
    margin-top: 3em;
}

.hero-description-holder.small-top-margin {
    margin-top: 1em;
}

.text-gradient-colored {
    background-image: linear-gradient(83deg, var(--primary), var(--secondary));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.button-view-page {
    z-index: 1;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    transition-property: box-shadow;
    display: flex;
    position: relative;
}

.button-view-page:hover {
    background-color: #fff;
    text-decoration: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .2);
}

.black-paragraph {
    color: #000;
}

.white-text-paragraph-holder {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-direction: column;
    width: 45%;
    display: flex;
}

.with-standarts-quick-stack {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    width: 100%;
    margin-top: 3em;
    padding: 0;
}

.white-medium-text {
    font-size: 25px;
    font-weight: 500;
}

.quic-stack-box {
    background-color: #ffc444;
    border-radius: 16px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-left: 30px;
    display: flex;
    position: relative;
    overflow: hidden;
}

.quic-stack-box.blue {
    pointer-events: none;
    color: #fff;
    background-color: #3452ff;
    padding-bottom: 40px;
    position: relative;
    overflow: hidden;
}

.figma-design-image {
    object-fit: contain;
    object-position: 50% 100%;
    border-radius: 4px;
    width: 100%;
    max-width: none;
    height: 330px;
    margin-top: 20px;
}

.black-text {
    color: #000;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
}

.open-cource-image {
    object-fit: contain;
    object-position: 100% 100%;
    width: 50%;
    position: absolute;
    bottom: 0%;
    left: auto;
    right: 0%;
}

.black-text-paragraph-holder {
    padding-left: 0;
    padding-right: 30px;
}

.link-inline {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 1;
}

.link-inline:hover {
    color: #fff;
}

.link-inline.w--current {
    color: #000;
}

.notification-subscribe-box {
    background-color: var(--secondary);
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 13px;
    border-radius: 100px;
    width: 24px;
    height: 24px;
}

.hero-link {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    background-color: var(--primary);
    color: #3c2f00;
    border-radius: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 8px 8px 8px 16px;
    line-height: 1;
    transition-property: all;
    display: flex;
}

.hero-link:hover {
    background-color: var(--secondary);
    color: #000;
}

.notification-banner {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    background-color: var(--primary);
    color: #000;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 2em;
    font-size: 14px;
    display: flex;
}

.notification-banner.notification-side-content {
    justify-content: space-between;
}

.style-guide-box-holder {
    grid-row-gap: 30px;
    background-color: rgba(0, 0, 0, .05);
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    display: flex;
}

.sg-notifications-box {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.hero-link-arrow {
    background-color: rgba(0, 0, 0, .1);
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 12px;
    border-radius: 20px;
    width: 20px;
    height: 20px;
    padding: 5px;
}

.notification-button-transparent {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    color: #000;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: opacity .35s, color .35s;
    display: flex;
}

.notification-button-transparent:hover {
    opacity: .8;
    color: #000;
}

.code-text {
    color: #cacaca;
    letter-spacing: .3px;
    margin-top: 1em;
    font-size: 15px;
    font-style: normal;
}

.code-tag-color {
    color: #170;
}

.code-style-starter {
    padding-left: 25px;
}

.code-grey {
    color: #9c9c9c;
}

.code-red {
    color: #f08989;
}

.code-blue {
    color: #5f4ce9;
}

.component-text {
    color: #00a457;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6ad_GreenCube.svg");
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: 17px;
    padding-left: 20px;
    position: relative;
}

.nav-rounded-center {
    z-index: 99;
    background-color: rgba(0, 0, 0, 0);
    border: 0 #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 950px;
    height: 75px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
}

.navbar-footer-main-link-holder {
    padding-right: 10px;
    font-size: 24px;
    font-weight: 500;
    position: relative;
}

.navbar-footer-main-link-holder:hover {
    color: var(--primary);
}

.demo-page-text-center {
    text-align: center;
    flex-direction: column;
    align-items: center;
    display: flex;
}

.nav-dropdown-icon {
    margin-right: 10px;
}

.blog-item-text-header {
    color: #606060;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.category-holder {
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.shop-item-title-price {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
}

.product-item-link {
    background-color: rgba(255, 255, 255, .1);
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform .2s, box-shadow .2s;
    display: flex;
    overflow: hidden;
}

.product-item-link:hover {
    text-decoration: none;
    transform: translate(0, -4px);
    box-shadow: 0 6px 30px 1px rgba(0, 0, 0, .1);
}

.shop-item-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.shop-item-title {
    font-size: 22px;
    font-weight: 500;
}

.shop-item-content {
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    width: 100%;
    padding: 1em;
    display: flex;
}

.shop-item-price {
    opacity: .8;
    font-size: 20px;
    font-weight: 400;
}

.small-thumbnail-image {
    width: 100%;
    padding-top: 80%;
    position: relative;
    overflow: hidden;
}

.category-text {
    background-image: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.shop-item-summary {
    color: #606060;
    font-size: 15px;
    display: none;
}

.folders-parent {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
}

.filter-holder {
    grid-column-gap: 5px;
    background-color: rgba(255, 255, 255, .1);
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    padding: 5px;
    line-height: 1;
    display: flex;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
}

.category-item-link {
    color: rgba(255, 255, 255, .7);
    background-color: rgba(0, 0, 0, 0);
    border: 1px #000;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    transition: all .35s;
    display: flex;
    position: relative;
}

.category-item-link:hover {
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 0, 0, .05);
    text-decoration: none;
}

.category-item-link.w--current {
    background-image: linear-gradient(90deg, var(--primary), var(--secondary));
    color: #fff;
    -webkit-text-fill-color: inherit;
    background-clip: border-box;
}

.category-item-link.active {
    background-image: linear-gradient(108deg, var(--primary), var(--secondary));
    color: #fff;
}

.hide-on-desktop {
    display: none;
}

.blog-item-title-2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: 600;
}

.blog-item-date {
    flex-direction: row;
    align-items: center;
    display: flex;
    position: relative;
}

.blog-item-link {
    background-color: rgba(255, 255, 255, .1);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform .2s, box-shadow .2s;
    display: flex;
    overflow: hidden;
}

.blog-item-link:hover {
    text-decoration: none;
    box-shadow: 0 6px 30px 1px rgba(0, 0, 0, .1);
}

.footer-heading-lighter {
    color: var(--notification-bg);
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 500;
}

.footer-description-secondary {
    color: rgba(0, 0, 0, .5);
    max-width: 260px;
    font-size: 14px;
}

.social-media-icons-2nd {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.white-text {
    color: #fff;
}

.tooltip-container {
    z-index: 120;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
}

.heading-3-style {
    margin-top: 0;
    font-size: 50px;
}

.card-item {
    z-index: 1;
    background-color: #f5f5f7;
    border-radius: 42px;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .05);
}

.card-item:hover {
    text-decoration: none;
}

.card-item.pricing-card {
    background-color: #fff;
    border-radius: 32px;
    height: 100%;
    box-shadow: 5px 14px 50px 7.6px rgba(0, 0, 0, .1);
}

.accordion-item-trigger {
    cursor: pointer;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.accordion-item-trigger:hover {
    opacity: .8;
}

.accordion-item {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    border-bottom: 2px solid var(--link-bg-grey);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding-bottom: 10px;
    display: flex;
}

.grey-text-2 {
    color: #878d95;
}

.notification-button {
    color: var(--primary);
    background-color: #000;
    border-radius: 2px;
    transition: background-color .35s, color .35s;
}

.notification-button:hover {
    color: var(--light-grey);
    background-color: rgba(0, 0, 0, .8);
}

.product-price {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 32px;
    font-weight: 500;
}

.hide-demo-page-text-on-tablet {
    padding-left: 5px;
}

.demo-hero-buttons-holder {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.hero-subtitle-holder {
    max-width: 85%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
}

.hero-subtitle-text {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 55px;
}

.subtitle-overlays {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    transform: translate(100%);
}

.subtitle-overlay-holder {
    width: 100%;
    height: 66px;
    position: relative;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
}

.subtitle-overlay {
    background-color: rgba(255, 255, 255, .5);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.section-info-text-no {
    color: var(--primary);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3em;
    padding-bottom: 3em;
    font-weight: 500;
    display: flex;
}

.animation-5-text {
    transform-origin: 50% 90%;
    text-transform: uppercase;
    width: auto;
    font-size: 140px;
    font-weight: 700;
    line-height: 1;
    overflow: hidden;
}

.animation-5-content {
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    perspective: 1000px;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
}

.animation-5-text-line {
    flex-direction: row;
    display: flex;
    overflow: hidden;
}

.animation-5-text-holder {
    perspective: 300px;
    perspective-origin: 50% 100%;
    overflow: hidden;
}

.animation-4-text-line {
    perspective: 1000px;
    perspective-origin: 50% 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.animation-4-text-holder {
    perspective: 350px;
    perspective-origin: 50% 0;
}

.animation-4-text {
    transform-origin: 50% 10%;
    text-transform: uppercase;
    width: auto;
}

.animation-4-text-parent {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
    font-size: 150px;
    font-weight: 800;
    line-height: .8;
    display: flex;
}

.animation-6-content {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
}

.animation-6-parent {
    font-size: 150px;
    font-weight: 700;
    line-height: 1;
}

.animation-6-text {
    width: auto;
}

.animation-6-text-line {
    perspective: 2000px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.animation-6-text-holder {
    width: auto;
}

.animation-6-text-holder._4 {
    object-position: 50% 100%;
}

.animation-3-text-holder {
    justify-content: center;
    align-items: center;
    width: auto;
    display: flex;
}

.animation-3-text {
    width: auto;
}

.animation-3-text-word {
    perspective: 1000px;
    perspective-origin: 50%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.animation-3-text-content {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    text-transform: uppercase;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 90px;
    font-weight: 700;
    line-height: 1;
    display: flex;
}

.animation-2-text {
    width: auto;
}

.animation-2-text-word {
    perspective: 1000px;
    flex-direction: row;
    display: flex;
}

.animation-2-text-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 145px;
    font-weight: 600;
    line-height: 1;
    display: flex;
}

.project-item {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 50px;
    text-decoration: none;
    position: relative;
}

.project-item:hover {
    text-decoration: none;
}

.project-item-title {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
}

.category-acronym {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    position: absolute;
    top: 40px;
    bottom: auto;
    left: auto;
    right: 0%;
}

.nav-menu-link {
    grid-column-gap: 0em;
    grid-row-gap: 0em;
    color: #c9c9c9;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 74px;
    line-height: 1.45;
    display: flex;
    overflow: hidden;
}

.cart-button-2 {
    outline-offset: 0px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    outline: 0 #2b2b2b;
    height: 100%;
    padding: 5px 15px 5px 5px;
    transition-property: background-color;
    overflow: hidden;
}

.nav-link-2 {
    z-index: 1;
    color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    transition: opacity .3s, filter .3s, color .35s;
    display: flex;
    position: relative;
}

.nav-link-2:hover {
    opacity: .5;
}

.nav-link-2.w--current {
    filter: blur(.5px);
}

.blog-item-full {
    grid-row-gap: 10px;
    color: #2b2b2b;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.blog-item-full:hover {
    color: #000;
}

.quantity-wrapper {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    display: flex;
}

.quantity-text {
    color: rgba(255, 255, 255, .5);
}

.work-item {
    position: relative;
}

.work-item:nth-child(2n) {
    position: relative;
    top: 8em;
}

.animation-on-page-load-1 {
    transform-origin: 50% 100%;
    transform-style: preserve-3d;
    transition: none;
    transform: perspective(500px)perspective(1174px);
}

.scroll-down-line-container {
    border-bottom-style: none;
    width: 13px;
    height: 100%;
    min-height: 120px;
    position: relative;
    overflow: hidden;
}

.animation-on-page-load-3,
.animation-on-page-load-4 {
    transform-origin: 50% 100%;
    transform: perspective(500px);
}

.quic-stack-ikonik-box {
    background-color: #ffc444;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-left: 30px;
    position: relative;
    overflow: hidden;
}

.quic-stack-ikonik-box.dark-gray {
    color: #fff;
    background-color: #1b1b1b;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6f1_BG%20Image.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 40px;
    position: relative;
}

.main-white-text-paragraph-holder {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-direction: column;
    width: 190px;
    display: flex;
}

.open-cource-ikonik-image {
    object-fit: cover;
    object-position: 0% 0%;
    width: 320px;
    height: 250px;
    position: absolute;
    top: 31%;
    bottom: 0%;
    left: auto;
    right: 0%;
}

.open-cource-ikonik-image.top-image {
    object-fit: cover;
    object-position: 0% 0%;
    width: 60%;
    height: 100%;
    top: 8%;
}

.content-sticky-2 {
    position: -webkit-sticky;
    position: sticky;
    top: 120px;
}

.years-header {
    z-index: 2;
    pointer-events: auto;
    width: 100%;
}

.wrapper {
    background-color: #000;
    padding-top: 0;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
}

.image-fit-cover {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.hero-title {
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 20px;
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    transform: none;
}

.hero-title.slider-title {
    color: #fff;
    transform: scale(1);
}

.years-slider-mask {
    background-color: rgba(0, 0, 0, 0);
    height: 90vh;
}

.text-container {
    padding-bottom: 50px;
}

.product-collection-item {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 25vw;
    margin-top: 0;
    padding-top: 0;
    display: flex;
}

.years-slide-text-container {
    pointer-events: auto;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    max-width: 30vw;
    display: flex;
}

.testimonial-carousel-container {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--border-color);
    width: 100%;
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 51.42%, rgba(255, 255, 255, 0) 100%);
    mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 51.42%, rgba(255, 255, 255, 0) 100%);
}

.heading-container {
    z-index: 1;
    padding-bottom: 2em;
    position: relative;
}

.quote-box-name {
    padding-top: 2em;
}

.hero-grid-content-1 {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    position: relative;
}

.background-overlay {
    pointer-events: none;
    background-color: rgba(0, 0, 0, .25);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.background-overlay.opacity50 {
    z-index: 2;
    background-color: rgba(0, 0, 0, .5);
}

.link-2 {
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
}

.link-2:hover {
    text-decoration: none;
}

.hero-grid-content-2 {
    z-index: 2;
    opacity: .1;
    text-align: center;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
}

.years-slide-image {
    z-index: 1;
    pointer-events: auto;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.speakers-grid {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    flex-flow: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex;
}

.speakers-grid.homepage {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.product-collection-list {
    width: 100%;
    height: 100%;
}

.years-slider-right-arrow {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .2);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    transition: background-color .4s;
    display: flex;
    top: auto;
    bottom: 1em;
    left: auto;
    right: 6rem;
}

.years-slider-right-arrow:hover {
    background-color: rgba(255, 255, 255, .3);
}

.nav-container {
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 100%;
    display: flex;
}

.organizers-grid {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    padding-top: 1px;
}

.workshop-brand-image {
    max-height: 24px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.image-container {
    object-fit: cover;
    border: 0 rgba(0, 0, 0, 0);
    border-radius: 0;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    overflow: hidden;
}

.organizer-logo {
    object-fit: contain;
    max-height: 30px;
}

.organizer-logo.main {
    min-width: 50%;
    max-height: none;
}

.hero-main-text-container {
    z-index: -1;
    grid-column-gap: 6vw;
    grid-row-gap: 6vw;
    opacity: 1;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 10000vw;
    min-width: 10000vw;
    display: flex;
}

.organizer-borders {
    z-index: -1;
    border: 1px solid var(--border-color);
    position: absolute;
    top: -1px;
    bottom: 0%;
    left: -1px;
    right: 0%;
}

.organizer-borders.with-background {
    border-color: var(--primary);
    background-color: var(--primary);
}

.grid-content-flex {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    position: relative;
}

.grid-content-flex.stretch {
    flex-direction: row;
    align-items: stretch;
}

.grid-content-flex.centered {
    text-align: center;
    justify-content: center;
    align-items: center;
}

.grid-content-flex.vertical-stretch {
    align-items: stretch;
    height: 100%;
}

.grid-content-flex.vertical-center {
    flex-direction: column;
    justify-content: center;
    display: flex;
}

.grid-content-flex.vertical-center.with-space {
    padding: 50px;
}

.slider-description {
    background-color: var(--primary);
    padding-left: 5px;
    padding-right: 5px;
    font-size: 30px;
    line-height: 1.5;
    display: inline;
}

.product-collection-wrapper {
    width: 100%;
    height: 100%;
}

.attendees-grid {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-top: 1px;
}

.primary-quote-text {
    text-align: left;
    padding: 1em;
}

.testimonials-grid {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100vw;
    padding-top: 1px;
    position: relative;
}

.quote-box-image {
    object-fit: cover;
    width: 40%;
    height: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto;
}

.speakers-grid-wrapper {
    width: 100%;
}

.help-link-container {
    align-items: center;
    margin-top: 35px;
    display: flex;
}

.years-slide {
    z-index: 1;
    height: 90vh;
    position: relative;
    overflow: hidden;
}

.organizers-grid-sponsor {
    background-color: var(--primary);
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: -1px;
    bottom: 0%;
    left: -1px;
    right: 0%;
}

.agenda-item {
    align-items: stretch;
    padding: 1px;
    display: flex;
    position: relative;
}

.link-underline {
    background-color: rgba(255, 255, 255, .5);
    width: 100%;
    height: 1px;
    margin-top: 4px;
    padding-top: 0;
}

.hero-container-sticky {
    z-index: 2;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;
}

.slide-play-icon {
    width: 40px;
}

.help-link-icon {
    filter: invert();
    width: 16px;
}

.bold-text {
    font-weight: 700;
}

.agenda-grid {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    padding-top: 1px;
    display: grid;
}

.agenda-grid.homepage {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: 1fr 1fr;
}

.slide-lightbox {
    z-index: 2;
    pointer-events: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 2em;
    padding-right: 10px;
    display: flex;
    position: relative;
}

.slide-lightbox:hover {
    text-decoration: none;
}

.years-slide-nav {
    width: 120px;
    height: 25px;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 7px;
    top: auto;
    bottom: 10px;
    left: auto;
    right: 6rem;
}

.years-slider-icon {
    filter: invert();
    width: 16px;
    height: 18px;
}

.years-slider-icon.rotate {
    transform: rotate(-180deg);
}

.years-slide-image-container {
    pointer-events: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
}

.event-day-description-container {
    border: 1px solid var(--border-color);
    width: 100%;
    margin-bottom: 1em;
    padding: 2em 2em 5em;
}

.semibold-text,
.help-link-scroll-text {
    font-weight: 600;
}

.slide-play-me {
    color: #fff;
    text-align: left;
    width: 240px;
    font-size: 42px;
    position: absolute;
    top: auto;
    bottom: auto;
    left: 100%;
    right: auto;
}

.organizer-content {
    object-fit: fill;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 12.5vw;
    padding: 20px;
    display: flex;
    position: relative;
}

.organizer-content.attendees-main-content {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.no-margin {
    margin-top: 0;
    margin-bottom: 0;
}

.grid-8-columns {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
}

.testimonial-borders {
    z-index: -1;
    border: 1px solid #444;
    position: absolute;
    top: -1px;
    bottom: 0%;
    left: -1px;
    right: 0%;
}

.content-link-help {
    border-right: 1px solid var(--border-color);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    padding: 0 40px;
    display: flex;
}

.content-link-help.last {
    border-right-width: 0;
}

.pricing-table-grid {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
    margin-top: 0;
    padding-top: 1px;
}

.grid-6-columns {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
}

.grid-6-columns.speaker-hero-grid {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
}

.testimonial-content {
    text-align: center;
    object-fit: fill;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 25vw;
    padding: 20px;
    display: flex;
    position: relative;
}

.years-slide-content {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
}

.testimonial-description {
    max-width: 600px;
    font-size: 20px;
    line-height: 1.2;
}

.overflow-hidden {
    position: relative;
    overflow: hidden;
}

.list-item-footer {
    width: 100%;
    padding-bottom: 5px;
}

.yars-slider-left-arrow {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .2);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-right: 70px;
    transition: background-color .4s;
    display: flex;
    top: auto;
    bottom: 1em;
    left: auto;
    right: 6rem;
}

.yars-slider-left-arrow:hover {
    background-color: rgba(255, 255, 255, .3);
}

.hero-grid-content-3 {
    opacity: .1;
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    position: relative;
}

.testimonial-logo {
    max-width: 120px;
    max-height: 25px;
    margin-bottom: 1em;
}

.years-slide-text {
    z-index: 2;
    pointer-events: none;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6em;
    display: flex;
    position: relative;
    overflow: hidden;
}

.primary-quote-box {
    background-color: var(--primary);
    text-align: center;
    width: 100%;
    padding: 5em 3em;
}

.primary-quote-box.with-picture {
    align-items: stretch;
    padding: 0 0 0 40%;
    display: flex;
    position: relative;
}

.main-section {
    z-index: 2;
    background-color: #000;
    padding: 3rem;
    display: block;
    position: relative;
    overflow: hidden;
}

.main-section.no-lr-padding {
    padding-left: 0;
    padding-right: 0;
}

.main-section.large-padding {
    padding: 6em;
}

.main-section.no-padding {
    padding: 0;
}

.main-section.overflow-visible {
    overflow: visible;
}

.main-section.previous-years {
    height: 90vh;
    padding: 0;
}

.nav-link-3 {
    color: #fff;
    flex-direction: column;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 400;
    text-decoration: none;
    transition: color .2s;
    display: flex;
}

.nav-link-3:hover {
    color: #ffe600;
    text-decoration: none;
}

.nav-link-3.w--current {
    color: #ffe600;
}

.hero-main-text {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    min-width: auto;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 4vw;
    padding-right: 4vw;
    font-family: Titillium Web, sans-serif;
    font-size: 20vw;
    font-weight: 400;
    line-height: 1;
    transform: scale(1);
}

.years-slider {
    background-color: rgba(0, 0, 0, 0);
    height: 90vh;
    margin-bottom: 0;
}

.help-link-icon-holder {
    background-color: var(--primary);
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    display: flex;
}

.block-quote {
    color: var(--primary);
}

.notification-link-inline {
    color: rgba(0, 0, 0, .7);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 1;
}

.notification-link-inline:hover {
    color: #fff;
}

.notification-link-inline.w--current {
    color: #000;
}

.hero-bg-wrap {
    width: 100%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.home-hero-video-wrap {
    width: 100%;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;
}

.home-hero-gradient {
    z-index: 2;
    -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) var(--hero-grid-display-size), #fff var(--hero-grid-display-size-2));
    mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) var(--hero-grid-display-size), #fff var(--hero-grid-display-size-2));
    background-color: #000;
    background-image: none;
    width: 100vw;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: -10px;
    right: 0%;
}

.big-text-wrap {
    z-index: 1;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    display: flex;
    position: absolute;
    top: auto;
    bottom: -1.9vw;
    left: 0%;
    right: 0%;
    overflow: hidden;
}

.home-hero-section {
    opacity: 1;
    background-color: #000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 300vh;
    margin-top: -70px;
    padding-top: 0;
    position: relative;
}

.scroll-down-anim {
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
    height: 73px;
    display: flex;
    position: absolute;
    bottom: 1em;
}

.scroll-lottie-animation {
    width: 100%;
    height: auto;
    margin-bottom: -10px;
}

.home-hero-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.hero-grid-content-gradient {
    z-index: -1;
    background-image: radial-gradient(circle closest-corner at 30% 50%, var(--primary), rgba(0, 0, 0, 0) 58%);
    opacity: .5;
    filter: none;
    pointer-events: none;
    position: absolute;
    top: -15%;
    bottom: -15%;
    left: -15%;
    right: -15%;
}

.hero-grid-content-gradient.center-gradient {
    background-image: radial-gradient(circle closest-corner at 50% 50%, var(--primary), rgba(0, 0, 0, 0) 58%);
}

.hero-grid-content-gradient.right-gradient {
    background-image: radial-gradient(circle closest-corner at 80% 50%, var(--primary), rgba(0, 0, 0, 0) 58%);
}

.page-border {
    z-index: 33;
    pointer-events: none;
    background-color: #fff;
    width: 100%;
    height: 10px;
    position: relative;
    bottom: auto;
    left: 0%;
    right: 0%;
}

.page-top-left-border-radius {
    background-color: rgba(0, 0, 0, 0);
    border-top-left-radius: 10px;
    width: 30px;
    height: 10px;
    position: absolute;
    top: 100%;
    bottom: auto;
    left: 0%;
    right: auto;
    overflow: visible;
    box-shadow: -10px 0 #fff;
}

.page-top-right-border-radius {
    background-color: rgba(0, 0, 0, 0);
    border-top-right-radius: 10px;
    width: 30px;
    height: 10px;
    position: absolute;
    top: 100%;
    bottom: auto;
    left: auto;
    right: 0;
    overflow: visible;
    box-shadow: 10px 0 #fff;
}

.page-top-bottom-borders {
    z-index: 32;
    pointer-events: none;
    flex-flow: column;
    justify-content: space-between;
    height: 100vh;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0;
    right: 0;
    transform: scale(1);
}

.page-bottom-left-border-radius {
    background-color: rgba(0, 0, 0, 0);
    border-bottom-left-radius: 10px;
    width: 30px;
    height: 10px;
    position: absolute;
    bottom: 100%;
    left: 0%;
    right: auto;
    overflow: visible;
    box-shadow: -10px 0 #fff;
}

.page-bottom-right-border-radius {
    background-color: rgba(0, 0, 0, 0);
    border-bottom-right-radius: 10px;
    width: 30px;
    height: 10px;
    position: absolute;
    bottom: 100%;
    left: auto;
    right: 0;
    overflow: visible;
    box-shadow: 10px 0 #fff;
}

.page-left-border {
    background-color: #fff;
    width: 10px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto;
}

.page-right-border {
    background-color: #fff;
    width: 10px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%;
}

.nav-bg-blur {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, .4);
    border-radius: 7px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .3);
}

.big-text {
    font-family: Manrope, sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
}

.hero-grid-holder {
    z-index: 3;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    pointer-events: none;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: none;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0%;
    right: 0%;
}

.hero-grid-cell {
    background-color: #000;
    width: 100%;
    padding-top: 100%;
}

.hero-grid-wrapper {
    z-index: 3;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
}

.hero-grid-gradient {
    background-image: radial-gradient(circle farthest-corner at 50% 50%, var(--primary), rgba(255, 255, 255, .3));
    filter: blur(30px);
    width: 20vw;
    height: 20vw;
    position: absolute;
}

.hero-gradient-cursor {
    z-index: 2;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 1px;
    height: 1px;
    display: flex;
    position: relative;
}

.two-lines-text-wrap {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    margin-left: -20px;
    display: flex;
}

.hero-big-text-holder {
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 8vw;
    padding-right: 8vw;
    display: flex;
}

.big-button-holder {
    justify-content: center;
    align-items: flex-start;
    padding-top: 2em;
    display: flex;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.black-link {
    color: #000;
}

.black-link:hover {
    color: #000;
    text-decoration: underline;
}

.home-grid-side-gradient {
    z-index: 3;
    pointer-events: none;
    background-image: none;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    box-shadow: inset 0 0 60px 70px #000;
}

.hero-button-wrap {
    z-index: 2;
    pointer-events: auto;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    position: relative;
}

.button-right-arrow-icon {
    width: 30px;
    height: 30px;
}

.button-arrow-wrap {
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    display: flex;
    position: relative;
}

.hero-ids {
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0);
    width: 10px;
    height: 50vh;
    position: absolute;
    top: 10%;
    bottom: auto;
    left: 0%;
    right: auto;
}

.hero-ids.second-id {
    top: 35%;
}

.hero-ids.third-id {
    top: 60%;
}

.hero-grid-shapes {
    z-index: 3;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fd7ac530b7d28d2d4e4860_Grid%20Bg.svg");
    background-position: 0 0;
    background-repeat: repeat;
    background-size: 150px;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.hero-grid-border-colors {
    z-index: 1;
    background-color: rgba(255, 255, 255, .3);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.testimonial-author {
    opacity: .6;
    margin-bottom: 0;
    font-size: 14px;
}

.testimonial-text-content {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    text-wrap: balance;
    flex-flow: column;
    display: flex;
}

.testimonials-wrap {
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1000vw;
    display: flex;
}

.cta-description {
    text-wrap: balance;
    max-width: 600px;
    font-size: 20px;
    line-height: 1.2;
}

.agenda-cms-wrapper {
    width: 100%;
}

.agenda-item-content {
    border-style: none solid solid;
    border-width: 1px;
    border-color: var(--border-color);
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
    padding: 20px 30px;
    display: flex;
}

.agenda-item-icon-holder {
    background-color: var(--primary);
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    display: flex;
}

.agenda-item-image-holder {
    position: relative;
}

.agenda-item-icon {
    filter: invert();
    width: 16px;
}

.agenda-item-title-holder {
    position: absolute;
    top: auto;
    bottom: 30px;
    left: 30px;
    right: 30px;
}

.agenda-item-link-container {
    align-items: center;
    margin-top: 35px;
    display: flex;
}

.agenda-item-title {
    background-color: var(--primary);
    padding-left: 5px;
    padding-right: 5px;
    font-size: 24px;
    line-height: 1.4;
    display: inline;
}

.agenda-link-text {
    font-weight: 600;
}

.agenda-item-image {
    object-fit: cover;
    width: 100%;
    height: 28vw;
}

.agenda-link-block {
    width: 100%;
    padding-bottom: 1px;
    padding-left: 1px;
    padding-right: 1px;
    display: block;
}

.agenda-link-block:hover {
    text-decoration: none;
}

.speaker-icon-holder {
    opacity: 1;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.speaker-item-title {
    margin-bottom: 10px;
}

.speaker-icon {
    width: 23px;
}

.speaker-item-details {
    padding: 1em 2em;
}

.speaker-item-details.small {
    padding: 0;
}

.speaker-link-block {
    margin-bottom: 3em;
}

.speaker-link-block:hover {
    text-decoration: none;
}

.speaker-link-block.small {
    align-items: center;
    margin-bottom: 2em;
    display: flex;
}

.speaker-link-block.big {
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    align-items: center;
    margin-bottom: 0;
    display: flex;
}

.speaker-item-image {
    object-fit: cover;
    border-radius: 100%;
    width: 100%;
    height: 100%;
}

.speaker-item-image.small {
    width: 66px;
    height: 66px;
}

.speaker-item-image.big {
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.text-bigger {
    font-size: 24px;
    line-height: 1.2;
}

.speaker-image-container {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.speaker-image-container.small {
    width: 66px;
    min-width: 66px;
    height: 66px;
    min-height: 66px;
    margin-right: 20px;
}

.speaker-image-container.big {
    width: 220px;
    min-width: 220px;
    height: auto;
    max-height: none;
}

.pricing-title {
    margin-right: 5px;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
}

.pricing-title.xl {
    font-family: Manrope, sans-serif;
    font-size: 110px;
    font-weight: 600;
}

.pricing-holder {
    align-items: flex-end;
    display: flex;
}

.pricing-type-2 {
    font-size: 24px;
    font-weight: 300;
}

.pricing-type-2.xl {
    font-size: 42px;
}

.pricing-table-content {
    z-index: 2;
    text-align: center;
    object-fit: fill;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    min-height: 80%;
    padding: 2em;
    display: flex;
    position: relative;
}

.pricing-link {
    font-family: Titillium Web, sans-serif;
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
}

.pricing-link:hover {
    text-decoration: none;
}

.pricing-button-wrap {
    flex-direction: column;
    justify-content: space-between;
    display: flex;
}

.pricing-button-wrap.full-width {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.pricing-borders {
    z-index: 1;
    border: 1px solid var(--border-color);
    pointer-events: none;
    position: absolute;
    top: -1px;
    bottom: 0%;
    left: -1px;
    right: 0%;
}

.pricing-borders.primary {
    border-color: var(--primary);
}

.pricing-table-content-header {
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-bottom: 2em;
    display: flex;
    position: relative;
}

.background-primary {
    z-index: 0;
    background-color: var(--primary);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.pricing-type-3 {
    font-size: 24px;
    font-weight: 300;
}

.price-item-summary-wrap {
    opacity: .7;
    padding-top: 10px;
    padding-bottom: 10px;
}

.price-item-summary {
    text-wrap: balance;
    font-family: Manrope, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
}

.animation-on-page-load-2 {
    transform-origin: 50% 100%;
    transform: perspective(500px);
}

.secondary-hero-content {
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    max-width: 70%;
    height: 100%;
    display: flex;
}

.background-slider {
    z-index: -1;
    background-color: #080808;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.cta-shapes-bg {
    z-index: -1;
    opacity: .4;
    background-color: #444;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fd7ac530b7d28d2d4e4860_Grid%20Bg.svg");
    background-position: 0 0;
    background-repeat: repeat;
    background-size: 150px;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.section-logo-list {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    opacity: .7;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.opacity-80 {
    opacity: .8;
}

.section-after-hero {
    padding-top: 80px;
    position: relative;
}

.pricing-container {
    width: 100%;
    padding-top: 5em;
    padding-bottom: 5em;
}

.speaker-big-name {
    font-size: 40px;
    line-height: 1.2;
}

.speakers-wrapper {
    padding-top: 60px;
    padding-bottom: 80px;
    position: relative;
}

.speakers-gradient {
    pointer-events: none;
    flex-flow: column;
    justify-content: space-between;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.speakers-gradient-top {
    background-image: linear-gradient(#000, rgba(0, 0, 0, 0));
    width: 100%;
    height: 160px;
    margin-top: -100px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

.speakers-gradient-bottom {
    background-image: linear-gradient(0deg, #000, rgba(0, 0, 0, 0));
    width: 100%;
    height: 160px;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
}

.footer-grid-wrapper {
    z-index: -1;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
}

.footer-grid-shapes {
    z-index: 3;
    background-color: var(--border-color);
    opacity: .5;
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fd7ac530b7d28d2d4e4860_Grid%20Bg.svg");
    background-position: 0 0;
    background-repeat: repeat;
    background-size: 150px;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.contact-grid {
    grid-column-gap: 3em;
    grid-row-gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.contact-content {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.web-payments-wrap {
    background-color: rgba(255, 255, 255, .1);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1em;
    padding: 8px 8px 1px;
}

.speaker-agenda-link-block {
    justify-content: flex-end;
    align-items: center;
    width: auto;
    margin-top: 3em;
    display: flex;
}

.start-end-date-separator {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 6px;
    padding-right: 6px;
}

.speaker-hero-sticky-content {
    background-color: var(--primary);
    min-height: 80vh;
    padding: 7em 3em 3em;
    position: relative;
}

.agenda-start-end-date {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 5px;
    font-weight: 700;
    display: flex;
}

.speaker-hero-sticky {
    background-color: var(--primary);
    position: -webkit-sticky;
    position: sticky;
    top: 110px;
}

.speaker-hero-agenda {
    padding: 7em 3em 0;
}

.link-with-underline {
    font-family: Titillium Web, sans-serif;
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
}

.link-with-underline:hover {
    text-decoration: none;
}

.link-with-underline.speaker-external-link {
    margin-bottom: 10px;
    font-family: Open Sans, sans-serif;
    font-size: 22px;
    font-weight: 600;
}

.speaker-short-bio {
    padding-bottom: 2em;
}

.speaker-agenda-item {
    border: 1px solid var(--border-color);
    padding: 2em;
}

.content-flex-v {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    position: relative;
}

.speaker-links {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2em;
    display: flex;
}

.speaker-agenda-icon-holder {
    background-color: #000;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    display: flex;
}

.link-underline-2 {
    background-color: var(--light-grey);
    width: 100%;
    height: 1px;
    margin-top: 4px;
    padding-top: 0;
}

.link-underline-2.thick {
    background-color: var(--primary);
    height: 2px;
    margin-top: 0;
}

.speaker-agenda-link {
    justify-content: center;
    align-items: center;
    display: flex;
}

.speaker-agenda-link:hover {
    text-decoration: none;
}

.speaker-agenda-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 110px;
}

.speaker-agenda {
    margin-bottom: 3em;
}

.speaker-agenda:last-child {
    margin-bottom: 0;
}

.speaker-external-link-text {
    font-family: Open Sans, sans-serif;
    font-size: 22px;
    font-weight: 600;
    display: flex;
}

.grid-8-columns-2 {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
}

.speaker-agenda-title {
    margin-top: 3em;
}

.speaker-details-image {
    object-fit: cover;
    border-radius: 100%;
    width: 25vw;
    height: 25vw;
    margin-top: 1em;
    margin-bottom: 2em;
}

.speaker-agenda-view-details {
    margin-right: 10px;
    font-weight: 600;
}

.ikonik-icon {
    color: #fff;
    width: 30px;
    height: 30px;
}

.agenda-content-item {
    padding-bottom: 3em;
}

.agenda-content-box {
    border: 1px solid var(--border-color);
    width: 100%;
    padding: 2em;
}

.agenda-main-img {
    object-fit: cover;
    width: 100%;
    max-width: none;
    height: 100%;
}

.date-inline {
    color: var(--secondary);
    margin-top: 0;
    margin-bottom: 0;
    display: inline;
}

.date-inline.space {
    padding-left: 15px;
    padding-right: 15px;
}

.agenda-hero-date {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
}

.agenda-details {
    max-width: 800px;
    margin-top: 5em;
}

.demo-page-image-wrap {
    z-index: 2;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
}

.buy-template-panel {
    z-index: 20;
    grid-column-gap: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 30px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 0;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    position: fixed;
    top: auto;
    bottom: 0%;
    left: auto;
    right: 0%;
}

.buy-template-panel:hover {
    color: #000;
    text-decoration: none;
}

.buy-template-link {
    grid-column-gap: 10px;
    opacity: .8;
    border-radius: 6px;
    flex-direction: row;
    align-items: stretch;
    padding: 0;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: opacity .4s, box-shadow .475s;
    display: flex;
    position: relative;
    overflow: hidden;
}

.buy-template-link:hover {
    opacity: 1;
    color: #000;
    border-color: #4253ff;
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(0, 0, 0, .23);
}

.buy-this-template-button-container {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    background-color: #fff;
    border-radius: 6px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 8px 12px;
}

.buy-this-template-content {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.buy-this-template-text {
    color: #000;
    font-size: 14px;
    font-weight: 500;
}

.buy-webflow-template-content {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.webflow-icon {
    background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/6619a6fb0c64fe382d3dc10a_Webflow%20Icon.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    display: block;
}

@media screen and (min-width: 1280px) {
    .hero-title {
        font-size: 96px;
    }
    .agenda-item {
        padding-left: 0;
        padding-right: 0;
    }
    .agenda-grid {
        width: 100%;
        padding-left: 2px;
        padding-right: 2px;
    }
    .testimonial-content {
        justify-content: space-around;
    }
    .pricing-table-content {
        justify-content: center;
        min-height: 50vw;
    }
    .pricing-table-content.small {
        min-height: auto;
    }
}

@media screen and (min-width: 1440px) {
    .container {
        max-width: 1350px;
    }
    .button.no-margins {
        margin-bottom: 0;
    }
    .template-cards-wrapper {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .template-footer-button-holder {
        max-width: 380px;
    }
    .demo-container {
        justify-content: center;
        align-items: flex-start;
        width: 170vw;
    }
    .template-card-holder {
        min-height: 27vw;
        padding: .5%;
    }
    .demo-blur-bg-effect {
        filter: blur(70px);
    }
    .white-text-paragraph-holder {
        width: 260px;
    }
    .open-cource-image {
        top: 30%;
        right: -6%;
    }
    .quic-stack-ikonik-box.dark-gray {
        background-image: url("https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6f1_BG%20Image.jpg");
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 40px;
    }
    .main-white-text-paragraph-holder {
        width: 260px;
    }
    .open-cource-ikonik-image {
        top: 30%;
        right: -6%;
    }
    .open-cource-ikonik-image.top-image {
        width: 60%;
        top: 1%;
    }
    .testimonial-content {
        justify-content: center;
    }
    .pricing-table-content {
        justify-content: center;
        min-height: 40vw;
    }
}

@media screen and (min-width: 1920px) {
    .hero-title {
        font-size: 130px;
    }
    .nav-container {
        margin-left: 10px;
        padding-top: 11px;
        padding-bottom: 11px;
    }
    .nav-link-3 {
        font-size: 22px;
    }
    .pricing-table-content {
        max-width: 700px;
    }
}

@media screen and (max-width: 991px) {
    h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 40px;
    }
    h3 {
        font-size: 30px;
    }
    h4 {
        font-size: 26px;
    }
    h5 {
        font-size: 22px;
    }
    h6 {
        font-size: 18px;
    }
    .container.hero-big-button-container {
        padding-bottom: 2em;
    }
    .nav-menu {
        z-index: 0;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        border-bottom: 1px solid var(--light-grey);
        color: #fff;
        background-color: #000;
        border-radius: 0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-height: 100vh;
        padding: 90px 2em 2em;
        position: fixed;
        top: 0;
        overflow: scroll;
    }
    .grid-6-col {
        grid-template-columns: 1fr 1fr 1fr;
    }
    .footer-link {
        padding-top: 0;
        padding-bottom: 2px;
    }
    .link-block-underline {
        display: none;
    }
    .footer-content {
        grid-template-columns: 1fr 1fr 1fr;
    }
    .nav-link-holder {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 5px 0;
        display: flex;
    }
    .nav-link-holder.nav-button-holder {
        padding-left: 0;
    }
    .menu-button {
        z-index: 1;
        transition: background-color .35s;
        display: flex;
    }
    .menu-button.w--open {
        background-color: var(--light-grey);
        border-radius: 10px;
    }
    .style-guide-tab-holder {
        padding-top: 7px;
        padding-bottom: 7px;
    }
    .style-guide-left-panel-holder {
        width: 100%;
    }
    .hero-text {
        font-size: 80px;
    }
    .style-guide-left-panel {
        grid-column-gap: 16px;
        grid-row-gap: 50px;
        flex-direction: row;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        padding: 1em;
        display: grid;
    }
    .link-block-23 {
        padding-top: 0;
        padding-bottom: 2px;
    }
    .style-guide-empty-container {
        padding: 17px 0;
    }
    .button {
        font-weight: 500;
    }
    .style-guide-main-panel {
        padding: 16px;
    }
    .style-guide-container {
        flex-direction: column;
    }
    .style-guide-hero-holder {
        padding: 1em;
    }
    .nav-link.nav-link-dropdown {
        margin-left: 0;
    }
    .link-background.link-bg-on-dark {
        display: none;
    }
    .social-media-icons {
        margin-top: 0;
        margin-bottom: 2em;
    }
    .contact-form {
        max-width: 100%;
    }
    .link-with-line {
        padding-top: 0;
        padding-bottom: 2px;
    }
    .blog-grid,
    .shop-list {
        grid-template-columns: 1fr 1fr;
    }
    .nav-cart-holder {
        z-index: 3;
        flex-direction: row;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        position: relative;
    }
    .cart {
        z-index: 1;
    }
    .cart-quantity {
        background-color: rgba(255, 255, 255, 0);
        border-style: none;
        margin-bottom: 0;
    }
    .cart-container {
        min-width: 600px;
        max-width: 600px;
    }
    .product-details-grid {
        grid-template-columns: 1fr;
    }
    .nav-dropdown {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-left: 0;
        display: flex;
    }
    .nav-dropdown-list {
        padding-top: 5px;
        padding-left: 0;
        padding-right: 0;
        position: relative;
        top: 10px;
    }
    .nav-dropdown-line-abs {
        display: none;
    }
    .nav-menu-overlay-mobile {
        z-index: 1;
        opacity: 0;
        background-color: rgba(0, 0, 0, .6);
        height: 70px;
        padding-bottom: 0;
        padding-right: 0;
        display: block;
        position: absolute;
        top: 0%;
        bottom: auto;
        left: 0%;
        right: 0%;
    }
    .nav-dropdown-link-arrow {
        width: 18px;
        height: 18px;
    }
    .nav-dropdown-link-arrow-holder {
        height: 20px;
        bottom: -16px;
    }
    .nav-dropdown-link-arrow-animated {
        height: 12px;
    }
    .explore-more-grid {
        grid-template-columns: 1fr;
    }
    .feature-text {
        max-width: 440px;
    }
    .feature-box {
        padding-top: 3em;
        padding-bottom: 3em;
        padding-left: 2em;
    }
    .template-more-things-grid,
    .demo-pages-grid {
        grid-template-columns: 1fr 1fr;
    }
    .template-included-image-holder {
        height: auto;
    }
    .grid-what-is-included {
        grid-template-columns: 1fr;
    }
    .text-paragraph-holder {
        height: auto;
    }
    .template-section {
        border-radius: 20px;
    }
    .template-card-holder {
        height: 270px;
    }
    .template-card-image {
        border-radius: 3px;
    }
    .demo-blur-bg-effect {
        display: none;
    }
    .integration-heading {
        font-size: 32px;
    }
    .demo-section {
        padding-bottom: 3em;
    }
    .template-footer-holder {
        grid-column-gap: 30px;
    }
    .white-text-paragraph-holder {
        width: 300px;
    }
    .quic-stack-box.blue {
        padding-bottom: 60px;
    }
    .notification-banner {
        padding-left: 1em;
        padding-right: 1em;
    }
    .heading-3-style {
        font-size: 30px;
    }
    .hide-demo-page-text-on-tablet {
        display: none;
    }
    .hero-subtitle-text {
        font-size: 35px;
    }
    .subtitle-overlay-holder {
        height: 42px;
    }
    .animation-5-text {
        font-size: 13vw;
    }
    .animation-5-content {
        grid-column-gap: 10px;
    }
    .animation-4-text-parent {
        font-size: 11vw;
    }
    .animation-6-parent {
        font-size: 13vw;
    }
    .project-item {
        width: 100%;
        padding-right: 30px;
    }
    .category-acronym {
        top: 10px;
        bottom: auto;
        left: 0%;
        right: auto;
    }
    .nav-menu-link {
        grid-column-gap: .5em;
        grid-row-gap: .5em;
    }
    .quantity-wrapper {
        justify-content: space-around;
        align-items: center;
        display: flex;
    }
    .main-white-text-paragraph-holder {
        width: 40%;
    }
    .open-cource-ikonik-image {
        top: 9%;
    }
    .hero-title {
        font-size: 80px;
    }
    .years-slider-mask {
        height: 80vh;
    }
    .years-slide-text-container {
        max-width: 50vw;
    }
    .testimonial-carousel-container {
        height: auto;
    }
    .speakers-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
    .years-slider-right-arrow {
        right: 2rem;
    }
    .nav-container {
        padding-left: 1em;
        padding-right: 1em;
        position: relative;
    }
    .organizers-grid {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .grid-content-flex.vertical-center.with-space {
        padding: 20px;
    }
    .attendees-grid {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .testimonials-grid {
        width: 150vw;
    }
    .years-slide {
        height: 80vh;
    }
    .link-underline {
        display: none;
    }
    .hero-container-sticky {
        height: 100svh;
    }
    .agenda-grid {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: 1fr 1fr;
    }
    .agenda-grid.homepage {
        grid-template-columns: 1fr;
    }
    .slide-lightbox {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
    }
    .years-slide-nav {
        right: 2rem;
    }
    .slide-play-me {
        font-size: 30px;
        position: relative;
        left: 10px;
    }
    .organizer-content {
        min-height: 16.66vw;
    }
    .content-link-help {
        height: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
    .pricing-table-grid {
        grid-template-rows: 1fr;
    }
    .testimonial-content {
        min-height: 16.66vw;
    }
    .testimonial-description {
        font-size: 20px;
    }
    .yars-slider-left-arrow {
        right: 2rem;
    }
    .years-slide-text {
        padding: 2em;
    }
    .main-section {
        padding-left: 2em;
        padding-right: 2em;
    }
    .main-section.large-padding {
        padding: 3em;
    }
    .main-section.previous-years {
        height: 80vh;
    }
    .nav-link-3 {
        text-align: left;
        margin-bottom: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 0;
        font-weight: 600;
        display: block;
    }
    .years-slider {
        height: 80vh;
    }
    .hero-gradient-cursor {
        display: none;
    }
    .hero-grid-shapes {
        background-size: 11vw;
    }
    .cta-description {
        font-size: 20px;
    }
    .agenda-item-image {
        height: 45vw;
    }
    .speaker-item-details {
        padding-left: 1em;
        padding-right: 1em;
    }
    .text-bigger {
        font-size: 20px;
    }
    .speaker-image-container.small,
    .speaker-image-container.big {
        margin-right: 15px;
    }
    .pricing-title {
        font-size: 50px;
    }
    .pricing-title.xl {
        font-size: 80px;
    }
    .pricing-holder {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .pricing-type-2 {
        font-size: 20px;
    }
    .pricing-type-2.xl {
        font-size: 30px;
    }
    .pricing-table-content {
        width: 100%;
        max-width: none;
        min-height: auto;
    }
    .pricing-type-3 {
        font-size: 20px;
    }
    .secondary-hero-content {
        max-width: 100%;
    }
    .cta-shapes-bg {
        background-size: 11vw;
    }
    .speaker-big-name {
        font-size: 20px;
    }
    .footer-grid-shapes {
        background-size: 11vw;
    }
    .contact-grid {
        grid-template-columns: 1fr;
    }
    .speaker-hero-sticky-content {
        padding: 5em 1em 1em;
    }
    .speaker-hero-sticky {
        top: 90px;
    }
    .speaker-hero-agenda {
        padding-top: 5em;
        padding-left: 1em;
        padding-right: 1em;
    }
    .link-underline-2 {
        display: none;
    }
    .speaker-agenda-wrapper {
        top: 90px;
    }
    .speaker-agenda-title {
        margin-top: 2em;
    }
    .agenda-content-item {
        padding-bottom: 2em;
    }
}

@media screen and (max-width: 767px) {
    .container {
        padding-left: 1em;
        padding-right: 1em;
    }
    .hero-section {
        height: auto;
    }
    .nav-menu {
        padding-left: 1em;
        padding-right: 1em;
    }
    .grid-4-col {
        grid-template-columns: 1fr 1fr;
    }
    .footer-image {
        object-fit: contain;
    }
    .nav-link-holder {
        width: 100%;
    }
    .change-log-container {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2em 1em;
    }
    .hero-text {
        font-size: 56px;
    }
    .style-guide-left-panel {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: 1fr 1fr;
    }
    .colors-holder {
        flex-direction: column;
        align-items: flex-start;
    }
    .style-guide-empty-container {
        padding-left: 0;
        padding-right: 0;
    }
    .font-holder {
        flex-direction: column;
        padding: 16px;
    }
    .hero-section-secondary {
        height: auto;
    }
    .hero-description-short-container {
        max-width: 100%;
    }
    .hero-description {
        font-size: 18px;
    }
    .hero-content {
        height: auto;
    }
    .shop-list {
        grid-template-columns: 1fr;
    }
    .cart-container {
        min-width: 500px;
        max-width: 500px;
    }
    .checkout-container {
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
    }
    .checkout-summary {
        margin-top: 2em;
    }
    .nav-dropdown {
        width: 100%;
    }
    .nav-dropdown-grid {
        grid-template-columns: 1fr 1fr;
        max-height: 70vh;
        overflow: auto;
    }
    .explore-more-grid {
        grid-template-columns: 1fr;
    }
    .feature-text {
        max-width: 310px;
        font-size: 30px;
    }
    .feature-box {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 25px;
    }
    .template-more-things-grid {
        grid-template-columns: 1fr;
    }
    .template-card-holder {
        height: 210px;
    }
    .integration-heading {
        font-size: 24px;
    }
    .template-footer-heading {
        max-width: 350px;
    }
    .template-footer-holder {
        grid-row-gap: 12px;
        flex-direction: column;
    }
    .hero-description-holder {
        margin-top: 2em;
    }
    .small-thumbnail-image {
        padding-top: 60%;
    }
    .hide-on-mobile {
        display: none;
    }
    .hide-on-desktop {
        display: block;
    }
    .blog-item-title-2 {
        font-size: 28px;
    }
    .white-text {
        color: #fff;
    }
    .card-item {
        flex-direction: column;
    }
    .animation-5-text {
        margin-top: 0;
    }
    .project-item {
        padding-top: 60px;
        padding-bottom: 50px;
    }
    .category-acronym {
        top: 30px;
    }
    .nav-menu-link {
        justify-content: center;
    }
    .work-item:nth-child(2n) {
        top: 0;
    }
    .main-white-text-paragraph-holder {
        width: 190px;
    }
    .open-cource-ikonik-image {
        width: 260px;
        height: 200px;
        top: 38%;
    }
    .hero-title {
        font-size: 70px;
    }
    .years-slide-text-container {
        max-width: 60vw;
    }
    .speakers-grid {
        grid-template-columns: 1fr 1fr;
    }
    .organizers-grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .grid-content-flex.vertical-center {
        padding: 20px;
    }
    .attendees-grid {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .testimonials-grid {
        width: 200vw;
    }
    .help-link-container {
        margin-top: 20px;
    }
    .agenda-grid {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
    .agenda-grid.homepage {
        grid-template-columns: 1fr 1fr;
    }
    .organizer-content {
        min-height: 24vw;
    }
    .grid-8-columns {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
    .content-link-help {
        border-bottom: 1px solid #e6e6e6;
        border-right-width: 0;
        padding-bottom: 40px;
    }
    .content-link-help.last {
        border-bottom-width: 0;
        margin-bottom: 0;
    }
    .pricing-table-grid {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
    .grid-6-columns {
        grid-template-columns: 1fr 1fr;
    }
    .testimonial-content {
        min-height: 50vw;
    }
    .primary-quote-box {
        padding: 2em;
    }
    .main-section {
        padding: 2rem 1em;
    }
    .main-section.large-padding {
        padding-left: 1em;
        padding-right: 1em;
    }
    .agenda-item-content {
        padding-left: 20px;
        padding-right: 20px;
    }
    .agenda-item-title-holder {
        bottom: 20px;
        left: 20px;
        right: 20px;
    }
    .agenda-item-link-container {
        margin-top: 20px;
    }
    .agenda-item-image {
        height: 50vw;
    }
    .pricing-table-content {
        min-height: 24vw;
    }
    .pricing-container {
        padding-left: 1em;
        padding-right: 1em;
    }
    .speaker-hero-sticky-content {
        min-height: auto;
        padding-bottom: 3em;
    }
    .speaker-hero-sticky {
        position: relative;
        top: 0;
    }
    .speaker-hero-agenda {
        padding-top: 1em;
    }
    .speaker-agenda-wrapper {
        position: relative;
        top: 0;
    }
    .grid-8-columns-2 {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }
    .agenda-content-box {
        padding: 1em;
    }
}

@media screen and (max-width: 479px) {
    h1 {
        font-size: 30px;
    }
    h2 {
        font-size: 26px;
    }
    h3 {
        font-size: 22px;
        font-weight: 600;
    }
    h4 {
        font-size: 20px;
        font-weight: 600;
    }
    h5 {
        font-size: 18px;
        font-weight: 500;
    }
    h6 {
        font-weight: 500;
    }
    blockquote {
        padding: 30px 0;
        font-size: 20px;
    }
    .container {
        padding: 3em 1em;
    }
    .navbar {
        padding-left: 5px;
        padding-right: 5px;
        top: 10px;
    }
    .hero-section {
        min-height: 80vh;
    }
    .grid-6-col {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: 1fr 1fr;
    }
    .grid-2-col {
        grid-template-columns: 1fr;
    }
    .utility-page-content {
        padding: 29px;
    }
    .utility-page-form {
        justify-content: space-between;
        height: 420px;
        padding: 30px;
    }
    .footer {
        text-align: left;
    }
    .footer-content {
        flex-direction: column;
        grid-template-columns: 1fr;
    }
    .made-by-section {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1.5em;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }
    .rich-text h5 {
        font-size: 17px;
        line-height: 1.4;
    }
    .rich-text figure {
        margin-top: 2em;
        margin-bottom: 3em;
        padding: 15px;
    }
    .rich-text ul {
        padding-left: 20px;
    }
    .rich-text h3 {
        font-size: 19px;
        line-height: 1.4;
    }
    .rich-text figcaption {
        font-size: 12px;
        line-height: 18px;
    }
    .rich-text h1 {
        font-size: 26px;
        font-weight: 500;
    }
    .rich-text p {
        font-size: 15px;
    }
    .rich-text h2 {
        font-size: 22px;
        line-height: 1.4;
    }
    .rich-text ol {
        padding-left: 20px;
    }
    .rich-text h4 {
        font-size: 18px;
        line-height: 1.4;
    }
    .rich-text h6 {
        font-size: 17px;
        line-height: 1.4;
    }
    .rich-text li {
        font-size: 15px;
    }
    .style-guide-title-holder {
        grid-column-gap: 3px;
        grid-row-gap: 3px;
    }
    .hero-text {
        font-size: 34px;
    }
    .paragraph-m {
        font-size: 16px;
    }
    .style-guide-left-panel {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        flex-direction: column;
        display: flex;
    }
    .headings-container {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
    }
    .grid-holder {
        padding: 1em;
    }
    .paragraph-container {
        width: 100%;
    }
    .button-grid {
        grid-template-columns: 1fr;
    }
    .aa-font {
        font-size: 80px;
    }
    .button-holder,
    .headings-holder {
        padding: 1em;
    }
    .nav-link.white-nav-link {
        padding-right: 0;
    }
    .hero-section-secondary {
        min-height: 100svh;
    }
    .social-media-icons {
        margin-bottom: 0;
    }
    .hero-content {
        align-items: flex-start;
    }
    .license-box {
        padding-left: 1em;
        padding-right: 1em;
    }
    .client-logo {
        max-width: 90px;
        max-height: 20px;
    }
    .instruction-item {
        padding-left: 1em;
        padding-right: 1em;
    }
    .trusted-by-grid-content {
        min-height: auto;
    }
    .blog-category-list {
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .blog-grid {
        grid-template-columns: 1fr;
    }
    .blog-item-title {
        font-size: 20px;
    }
    .blog-category-links-holder {
        flex-flow: wrap;
        grid-auto-columns: 1fr;
    }
    .add-to-cart-button {
        background-size: 24px;
        width: 42px;
        min-width: 42px;
        height: 42px;
        min-height: 42px;
    }
    .cart-quantity {
        margin-bottom: 0;
    }
    .cart-container {
        border-radius: 0;
        min-width: 100%;
        max-width: 100%;
        max-height: 700px;
    }
    .cart-header {
        z-index: 5;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
    .cart-item-image {
        width: 80px;
        height: 80px;
    }
    .cart-footer {
        position: -webkit-sticky;
        position: sticky;
        bottom: 0;
    }
    .cart-item-title {
        font-size: 18px;
    }
    .cart-item-content {
        margin-left: 10px;
        margin-right: 0;
    }
    .heading-title-holding {
        padding-bottom: 1em;
    }
    .product-other-images {
        margin-top: .5em;
    }
    .product-other-images-list {
        grid-column-gap: .5em;
        grid-row-gap: .5em;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .product-other-image-lightbox {
        padding: .5em;
    }
    .order-item-title,
    .order-item-price {
        font-size: 14px;
    }
    .order-item-full-content {
        grid-column-gap: .5em;
        grid-row-gap: .5em;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .order-info-row {
        grid-column-gap: 1.5em;
        grid-row-gap: 1.5em;
    }
    .licensing-instruction-heading {
        font-size: 20px;
    }
    .nav-dropdown-list {
        width: 100vw;
        margin-left: -1em;
        padding-left: 5px;
        padding-right: 5px;
    }
    .nav-dropdown-list.w--open {
        margin-bottom: 10px;
    }
    .nav-dropdown-list-content {
        padding-left: 1em;
        padding-right: 1em;
    }
    .nav-dropdown-grid {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
    }
    .nav-dropdown-footer {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 3em;
    }
    .nav-menu-overlay-mobile {
        height: 70px;
    }
    .explore-more-grid {
        grid-template-columns: 1fr;
    }
    .small-content {
        padding-bottom: 2em;
    }
    .large-white-text {
        font-size: 30px;
    }
    .hero-box-tittle {
        padding-left: 20px;
        padding-right: 20px;
    }
    .feature-text {
        margin-bottom: 10px;
        font-size: 20px;
    }
    .template-includes-card {
        width: auto;
        padding-left: 30px;
        padding-right: 0;
    }
    .feature-box {
        background-position: 50% 94%;
        background-size: auto 160px;
        padding: 2em 2em 200px;
    }
    .text-gray-paragraph-holder-2 {
        padding-right: 20px;
    }
    .template-more-things-grid {
        grid-template-columns: 1fr;
    }
    .text-gray-paragraph-holder {
        padding-right: 0;
    }
    .template-growth-features {
        font-size: 25px;
    }
    .figma-component-library-holder {
        width: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
    .demo-page-link {
        padding-left: 0;
    }
    .name-of-pages-text {
        font-size: 20px;
    }
    .demo-pages-grid {
        grid-template-columns: 1fr;
    }
    .inside-box-text {
        text-align: center;
    }
    .template-cards-wrapper {
        width: 270%;
        margin-left: -26px;
    }
    .template-button-holder {
        grid-column-gap: 14px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .template-section {
        border-radius: 24px;
    }
    .template-card-holder {
        height: 180px;
        padding: 6px;
    }
    .integration-heading {
        font-size: 21px;
    }
    .hero-description-holder {
        margin-top: 1em;
    }
    .white-text-paragraph-holder {
        width: 100%;
    }
    .quic-stack-box {
        padding-top: 30px;
        padding-left: 20px;
    }
    .quic-stack-box.blue {
        padding-bottom: 200px;
    }
    .figma-design-image {
        height: 190px;
    }
    .open-cource-image {
        width: 90%;
        max-height: 170px;
    }
    .hero-link {
        padding: 6px 6px 6px 12px;
        font-size: 14px;
    }
    .notification-banner {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .style-guide-box-holder {
        padding: 1em;
    }
    .navbar-footer-main-link-holder {
        font-size: 22px;
    }
    .shop-item-title-price {
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .shop-item-content {
        padding: 1.5em 1em;
    }
    .filter-holder {
        flex-direction: row;
        align-content: flex-start;
        align-items: center;
        padding: 5px;
    }
    .category-item-link {
        padding: 9px 12px;
    }
    .blog-item-title-2 {
        font-size: 24px;
    }
    .white-text {
        color: #fff;
    }
    .heading-3-style {
        font-size: 22px;
    }
    .card-item {
        border-radius: 30px;
    }
    .demo-hero-buttons-holder {
        grid-column-gap: 1em;
        grid-row-gap: 1em;
    }
    .hero-subtitle-holder {
        max-width: 90%;
    }
    .hero-subtitle-text {
        font-size: 25px;
    }
    .subtitle-overlay-holder {
        height: 36px;
    }
    .animation-5-content {
        grid-column-gap: 7px;
    }
    .quic-stack-ikonik-box {
        padding-top: 30px;
        padding-left: 20px;
    }
    .quic-stack-ikonik-box.dark-gray {
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 200px;
        display: flex;
    }
    .main-white-text-paragraph-holder {
        width: 100%;
    }
    .open-cource-ikonik-image {
        width: 90%;
        height: 170px;
        top: auto;
    }
    .open-cource-ikonik-image.top-image {
        object-fit: cover;
        width: 100%;
        height: 47%;
        top: auto;
        bottom: 0%;
        left: 0%;
        right: 0%;
    }
    .wrapper {
        padding-left: 5px;
        padding-right: 5px;
    }
    .hero-title {
        font-size: 48px;
    }
    .years-slide-text-container {
        max-width: 100vw;
    }
    .testimonial-carousel-container {
        height: auto;
        -webkit-mask-image: linear-gradient(270deg, rgba(255, 255, 255, .5) 0%, #fff 51.42%, rgba(255, 255, 255, .5) 100%);
        mask-image: linear-gradient(270deg, rgba(255, 255, 255, .5) 0%, #fff 51.42%, rgba(255, 255, 255, .5) 100%);
    }
    .speakers-grid {
        grid-column-gap: 2em;
        grid-row-gap: 2em;
    }
    .years-slider-right-arrow {
        z-index: 2;
        bottom: 1rem;
        right: 1rem;
    }
    .organizers-grid {
        grid-template-columns: 1fr 1fr;
    }
    .grid-content-flex.vertical-center {
        padding-left: 16px;
        padding-right: 16px;
    }
    .slider-description {
        font-size: 20px;
    }
    .attendees-grid {
        grid-template-columns: 1fr 1fr;
    }
    .testimonials-grid {
        width: 400vw;
    }
    .quote-box-image {
        width: 100%;
        position: relative;
    }
    .slide-play-icon {
        width: 30px;
    }
    .years-slide-nav {
        z-index: 1;
        width: auto;
        left: 1rem;
        right: 1rem;
    }
    .event-day-description-container {
        padding: 1em 1em 2em;
    }
    .slide-play-me {
        font-size: 24px;
    }
    .organizer-content,
    .testimonial-content {
        min-height: 50vw;
    }
    .yars-slider-left-arrow {
        z-index: 2;
        bottom: 1rem;
        left: 1rem;
        right: auto;
    }
    .years-slide-text {
        padding: 2em 1em 6em;
    }
    .primary-quote-box.with-picture {
        flex-direction: column;
        padding-left: 0%;
    }
    .page-border {
        height: 5px;
    }
    .page-top-bottom-borders {
        padding-left: 5px;
        padding-right: 5px;
    }
    .page-left-border,
    .page-right-border {
        width: 5px;
    }
    .big-text {
        font-size: 18px;
        font-weight: 500;
    }
    .agenda-item-image {
        height: 90vw;
    }
    .speaker-link-block.big {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
    .speaker-image-container.big {
        width: 80px;
        min-width: 80px;
    }
    .pricing-title.xl {
        font-size: 70px;
    }
    .pricing-table-content {
        min-height: 50vw;
        padding-left: 1em;
        padding-right: 1em;
    }
    .pricing-button-wrap {
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        width: 100%;
        display: flex;
    }
    .pricing-container {
        padding: 3em 1em;
    }
    .speaker-big-name {
        font-size: 22px;
    }
    .speakers-wrapper {
        padding-top: 0;
    }
    .speakers-gradient-top,
    .speakers-gradient-bottom {
        height: 120px;
    }
    .speaker-agenda-link-block {
        justify-content: flex-start;
        align-items: center;
    }
    .buy-template-panel {
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
        display: none;
    }
}

#w-node-_1b3a4b1b-1981-6cfe-2c80-737bb31f822d-dda8e665,
#w-node-_1b3a4b1b-1981-6cfe-2c80-737bb31f8236-dda8e665,
#w-node-_1b3a4b1b-1981-6cfe-2c80-737bb31f823f-dda8e665 {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198d2-dda8e665 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198e2-dda8e665,
#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198e9-dda8e665,
#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198f0-dda8e665,
#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198f7-dda8e665 {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198fe-dda8e665 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-c1734742-2afe-bc88-19df-2f04a114aad8-dda8e665 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
}

#w-node-c1734742-2afe-bc88-19df-2f04a114aad9-dda8e665 {
    grid-area: span 2 / span 1 / span 2 / span 1;
}

#w-node-c1734742-2afe-bc88-19df-2f04a114aae1-dda8e665,
#w-node-c1734742-2afe-bc88-19df-2f04a114aaed-dda8e665,
#w-node-_40f4c42e-c5b5-ec97-317c-3ec28e179204-dda8e665,
#w-node-_40f4c42e-c5b5-ec97-317c-3ec28e179212-dda8e665 {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_74ab3314-1e2b-a768-0bb3-b25894c1a502-0a144c54,
#w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a27d-dda8e6da {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a281-dda8e6da {
    grid-area: span 1 / span 2 / span 1 / span 2;
    justify-self: end;
}

#w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa8f-11568475,
#w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa91-11568475 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-_556bb27e-6239-acf9-28aa-4e522e02fdae-dda8e6dd {
    grid-area: span 2 / span 2 / span 2 / span 2;
}

#w-node-_556bb27e-6239-acf9-28aa-4e522e02fdd4-dda8e6dd {
    grid-area: 1 / 3 / 2 / 5;
}

#w-node-_556bb27e-6239-acf9-28aa-4e522e02fdf9-dda8e6dd {
    grid-area: 2 / 3 / 3 / 5;
}

#w-node-_6995eda4-7418-793d-d771-71b2c528dbc1-dda8e6de,
#w-node-_1f321115-1b62-2209-0f85-ca08606a72dd-dda8e6df,
#w-node-ba664d03-96ff-3927-b94b-449f0e6d0d97-dda8e6df,
#w-node-b99d3615-d086-c5cc-5c5b-3acafcd34651-dda8e6df {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_067bddd4-1c7e-f173-20fd-25ac593191b0-f715fef1,
#w-node-_067bddd4-1c7e-f173-20fd-25ac593191bb-f715fef1,
#w-node-_067bddd4-1c7e-f173-20fd-25ac593191d8-f715fef1 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-_067bddd4-1c7e-f173-20fd-25ac593191fb-f715fef1 {
    grid-area: 1 / 5 / 2 / 9;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fedf-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fee6-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fef0-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fefa-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff04-dda8e6e5 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff10-dda8e6e5 {
    grid-area: span 3 / span 4 / span 3 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff12-dda8e6e5 {
    grid-area: 1 / 1 / 2 / 7;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff15-dda8e6e5 {
    grid-area: 2 / 7 / 3 / 9;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff18-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff21-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff24-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-_13efe4bc-2f56-5e96-a422-9ff508af60c2-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2e-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2c-dda8e6e5 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff30-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff35-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff3d-dda8e6e5 {
    grid-area: 1 / 1 / 3 / 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff41-dda8e6e5 {
    grid-area: 1 / 3 / 2 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff45-dda8e6e5 {
    grid-area: 1 / 4 / 2 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff49-dda8e6e5 {
    grid-area: 2 / 3 / 3 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff4d-dda8e6e5 {
    grid-area: 2 / 5 / 3 / 6;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff51-dda8e6e5 {
    grid-area: 2 / 7 / 3 / 8;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff55-dda8e6e5 {
    grid-area: 2 / 8 / 3 / 9;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5a-dda8e6e5 {
    grid-area: 3 / 4 / 4 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5e-dda8e6e5 {
    grid-area: 3 / 5 / 4 / 6;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff62-dda8e6e5 {
    grid-area: 3 / 6 / 4 / 7;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff66-dda8e6e5 {
    grid-area: 3 / 7 / 4 / 8;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa0-dda8e6e5 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa6-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa9-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffac-dda8e6e5 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb6-dda8e6e5 {
    grid-area: 1 / 1 / 3 / 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffbe-dda8e6e5 {
    grid-area: 2 / 3 / 3 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc2-dda8e6e5 {
    grid-area: 2 / 4 / 3 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc6-dda8e6e5 {
    grid-area: 3 / 3 / 4 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffca-dda8e6e5 {
    grid-area: 3 / 5 / 4 / 6;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffdc-dda8e6e5 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe2-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe5-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe8-dda8e6e5 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fff2-dda8e6e5 {
    grid-area: 1 / 1 / 3 / 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffa-dda8e6e5 {
    grid-area: 2 / 3 / 3 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffe-dda8e6e5 {
    grid-area: 2 / 4 / 3 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20002-dda8e6e5 {
    grid-area: 3 / 3 / 4 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20006-dda8e6e5 {
    grid-area: 3 / 5 / 4 / 6;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20018-dda8e6e5 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2001e-dda8e6e5 {
    grid-area: span 1 / span 4 / span 1 / span 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20021-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20024-dda8e6e5 {
    grid-area: span 1 / span 3 / span 1 / span 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2002e-dda8e6e5 {
    grid-area: 1 / 1 / 3 / 3;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20036-dda8e6e5 {
    grid-area: 2 / 3 / 3 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003a-dda8e6e5 {
    grid-area: 2 / 4 / 3 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003e-dda8e6e5 {
    grid-area: 3 / 3 / 4 / 4;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20042-dda8e6e5 {
    grid-area: 3 / 5 / 4 / 6;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2005e-dda8e6e5 {
    grid-area: span 2 / span 2 / span 2 / span 2;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20065-dda8e6e5 {
    grid-area: 1 / 3 / 2 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2006c-dda8e6e5 {
    grid-area: 2 / 3 / 3 / 5;
}

#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20079-dda8e6e5,
#w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2007f-dda8e6e5,
#w-node-_9e504ec1-1655-e5de-dcb4-1cd54824d11c-dda8e6e5,
#w-node-_131c1f58-7ee7-6062-90f6-0c2904e1957c-dda8e6e5,
#w-node-a98c6d07-6863-d91f-9445-388b9a6bfe15-dda8e6e5,
#w-node-a98c6d07-6863-d91f-9445-388b9a6bfe1e-dda8e6e5,
#w-node-a98c6d07-6863-d91f-9445-388b9a6bfe27-dda8e6e5,
#w-node-a98c6d07-6863-d91f-9445-388b9a6bfe30-dda8e6e5 {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-d0e0a395-1147-aac5-db53-ca795f86db0b-5f86db0a {
    grid-area: 1 / 1 / 2 / 4;
}

#w-node-d0e0a395-1147-aac5-db53-ca795f86db1b-5f86db0a {
    grid-area: 1 / 3 / 2 / 5;
}

#w-node-d0e0a395-1147-aac5-db53-ca795f86db2b-5f86db0a {
    grid-area: 1 / 4 / 2 / 7;
}

#w-node-_622a45c8-103c-30e3-5783-4d46ad938c14-dda8e6fb,
#w-node-b1078083-528c-8a78-9451-10023c5ce546-dda8e6fb,
#w-node-_2d0a1bf9-b5f4-adf1-c02a-5eac1e935d88-dda8e6fb,
#w-node-_7eb1222e-9580-c875-bb4c-680b609efc47-dda8e6fb,
#w-node-c36b843d-59da-f500-5277-867ccfc46c3b-dda8e6fb,
#w-node-_4863c51c-4368-cf5e-69b5-d0addca86478-dda8e6fb {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3227-97b19bb0 {
    grid-area: span 2 / span 2 / span 2 / span 2;
}

#w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a324c-97b19bb0 {
    grid-area: 1 / 3 / 2 / 5;
}

#w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3271-97b19bb0 {
    grid-area: 2 / 3 / 3 / 5;
}

#w-node-_9ebaf297-5a41-9b53-27d1-0321d8885929-dda8e705,
#w-node-_38b8173a-6c33-0dcc-71f2-1b6aad459eb6-dda8e705,
#w-node-_38b8173a-6c33-0dcc-71f2-1b6aad459ebc-dda8e705,
#w-node-_38b8173a-6c33-0dcc-71f2-1b6aad459ec1-dda8e705,
#w-node-_38b8173a-6c33-0dcc-71f2-1b6aad459ec6-dda8e705 {
    grid-area: span 1 / span 2 / span 1 / span 2;
}

@media screen and (min-width: 1440px) {
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fedf-dda8e6e5 {
        grid-column: span 3 / span 3;
    }
}

@media screen and (max-width: 991px) {
    #w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198fe-dda8e665 {
        grid-column: span 2 / span 2;
    }
    #w-node-c1734742-2afe-bc88-19df-2f04a114aad8-dda8e665 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
    }
    #w-node-c1734742-2afe-bc88-19df-2f04a114aad9-dda8e665 {
        grid-area: span 2 / span 1 / span 2 / span 1;
    }
    #w-node-c1734742-2afe-bc88-19df-2f04a114aae1-dda8e665,
    #w-node-c1734742-2afe-bc88-19df-2f04a114aaed-dda8e665 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-_74ab3314-1e2b-a768-0bb3-b25894c1a502-0a144c54 {
        grid-column: span 3 / span 3;
    }
    #w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa8f-11568475,
    #w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa91-11568475 {
        grid-column: span 6 / span 6;
    }
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdae-dda8e6dd {
        grid-area: span 2 / span 4 / span 2 / span 4;
    }
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdd4-dda8e6dd,
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdf9-dda8e6dd {
        grid-area: span 1 / span 4 / span 1 / span 4;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fee6-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fef0-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fefa-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff04-dda8e6e5 {
        grid-column: span 4 / span 4;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff3d-dda8e6e5 {
        grid-area: span 2 / span 3 / span 2 / span 3;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff41-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff45-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff49-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff4d-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff51-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff55-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5a-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5e-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff62-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff66-dda8e6e5 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa9-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffac-dda8e6e5 {
        grid-column: span 6 / span 6;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb6-dda8e6e5 {
        grid-area: span 2 / span 2 / span 2 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffbe-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc2-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc6-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffca-dda8e6e5 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe5-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe8-dda8e6e5 {
        grid-column: span 6 / span 6;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fff2-dda8e6e5 {
        grid-area: span 2 / span 2 / span 2 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffa-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffe-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20002-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20006-dda8e6e5 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20021-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20024-dda8e6e5 {
        grid-column: span 6 / span 6;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2002e-dda8e6e5 {
        grid-area: span 2 / span 2 / span 2 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20036-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003a-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003e-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20042-dda8e6e5 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2005e-dda8e6e5 {
        grid-area: span 2 / span 4 / span 2 / span 4;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20065-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2006c-dda8e6e5 {
        grid-area: span 1 / span 4 / span 1 / span 4;
    }
    #w-node-d0e0a395-1147-aac5-db53-ca795f86db2b-5f86db0a {
        grid-column-start: 3;
    }
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3227-97b19bb0 {
        grid-area: span 2 / span 4 / span 2 / span 4;
    }
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a324c-97b19bb0,
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3271-97b19bb0 {
        grid-area: span 1 / span 4 / span 1 / span 4;
    }
}

@media screen and (max-width: 767px) {
    #w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198d2-dda8e665,
    #w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198fe-dda8e665 {
        grid-column: span 1 / span 1;
    }
    #w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa8f-11568475,
    #w-node-_23ea8cec-5b3e-5e0b-4daa-514a597aaa91-11568475 {
        grid-column: span 2 / span 2;
    }
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdae-dda8e6dd {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdd4-dda8e6dd,
    #w-node-_556bb27e-6239-acf9-28aa-4e522e02fdf9-dda8e6dd {
        grid-column: span 2 / span 2;
    }
    #w-node-_067bddd4-1c7e-f173-20fd-25ac593191b0-f715fef1 {
        grid-area: 1 / 1 / 2 / 3;
    }
    #w-node-_067bddd4-1c7e-f173-20fd-25ac593191bb-f715fef1 {
        grid-area: 2 / 1 / 3 / 3;
    }
    #w-node-_067bddd4-1c7e-f173-20fd-25ac593191d8-f715fef1 {
        grid-column: span 2 / span 2;
    }
    #w-node-_067bddd4-1c7e-f173-20fd-25ac593191fb-f715fef1 {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fedf-dda8e6e5 {
        grid-column: span 2 / span 2;
    }
    #w-node-_13efe4bc-2f56-5e96-a422-9ff508af60c2-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2c-dda8e6e5 {
        grid-column: span 1 / span 1;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff3d-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa6-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa9-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffac-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb6-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe2-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe5-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe8-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fff2-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2001e-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20021-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20024-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2002e-dda8e6e5 {
        grid-column: span 2 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2005e-dda8e6e5 {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20065-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2006c-dda8e6e5 {
        grid-column: span 2 / span 2;
    }
    #w-node-d0e0a395-1147-aac5-db53-ca795f86db0b-5f86db0a {
        grid-area: 1 / 1 / 2 / 3;
    }
    #w-node-d0e0a395-1147-aac5-db53-ca795f86db1b-5f86db0a,
    #w-node-d0e0a395-1147-aac5-db53-ca795f86db2b-5f86db0a {
        grid-column: 1 / 3;
    }
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3227-97b19bb0 {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a324c-97b19bb0,
    #w-node-_381a4191-2c06-5c1e-0ee0-4cac3c1a3271-97b19bb0 {
        grid-column: span 2 / span 2;
    }
}

@media screen and (max-width: 479px) {
    #w-node-_0f9ac4e2-b36f-27d4-d4dd-c911ba0198f7-dda8e665 {
        grid-area: span 1 / span 1 / span 1 / span 1;
    }
    #w-node-_74ab3314-1e2b-a768-0bb3-b25894c1a502-0a144c54 {
        grid-column: span 1 / span 1;
    }
    #w-node-aa3ba402-f4fe-a9ff-7f0f-37c951e38af1-75a6784e,
    #w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a26d-dda8e6da,
    #w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a271-dda8e6da,
    #w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a275-dda8e6da,
    #w-node-e6fe46e8-0a22-e6ca-c8f7-666468a4a279-dda8e6da,
    #w-node-_8bd5b38b-370e-7efe-576c-8e3eb6589d52-11568475,
    #w-node-cb0ab4ee-c3cb-55b6-4bf9-53c724a0b1fb-87fa018e,
    #w-node-b1e25536-8d83-e25d-0209-52b93496fa10-f715fef1 {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff12-dda8e6e5 {
        grid-column-end: 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff15-dda8e6e5 {
        grid-column: 2 / 3;
    }
    #w-node-_13efe4bc-2f56-5e96-a422-9ff508af60c2-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2c-dda8e6e5 {
        grid-column: span 2 / span 2;
    }
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb1-dda8e6e5,
    #w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffd3-dda8e6e5,
    #w-node-c0b2a8d1-8c84-6ea9-0781-a7fde946dff8-dda8e6e5,
    #w-node-_57e7d082-2a92-eae8-331c-ec48009aa08b-dda8e6e5,
    #w-node-d008e3af-389d-55f0-302f-ce9e50feb30e-dda8e6e5,
    #w-node-_3f7b4a43-dc2f-ebd1-90d5-60af9c6e4fc7-dda8e6e5,
    #w-node-c798cf2e-80a7-939f-0b97-ba58b98629c3-e70476e1 {
        grid-area: span 1 / span 2 / span 1 / span 2;
    }
}
  `}
    </style>
    

  return (
    <div class="wrapper">
        <div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="500" data-doc-height="1">
            <div class="container nav-container">
                <div class="nav-menu-container"><a href="/" class="brand-link w-nav-brand"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fd897cc89af5aaea833c9f_Qatar%20light.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="brand-logo"/></a>
                    <nav
                        role="navigation" class="nav-menu right-padding w-nav-menu">
                        <div class="nav-link-holder">
                            <a href="/home" aria-current="page" class="nav-link w-inline-block w--current">
                                <div>Home</div>
                                <div class="link-background"></div>
                            </a>
                        </div>
                        <div class="nav-link-holder">
                            <a href="/pricing" class="nav-link w-inline-block">
                                <div>Pricing</div>
                                <div class="link-background"></div>
                            </a>
                        </div>
                        <div class="nav-link-holder">
                            <a href="/agenda" class="nav-link w-inline-block">
                                <div>Agenda</div>
                                <div class="link-background"></div>
                            </a>
                        </div>
                        <div class="nav-link-holder">
                            <div data-hover="true" data-delay="300" class="nav-dropdown w-dropdown">
                                <div class="nav-link nav-link-dropdown w-dropdown-toggle">
                                    <div class="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                                    <div>Pages</div>
                                    <div class="link-background"></div>
                                    <div class="nav-dropdown-link-arrow-holder">
                                        <div class="nav-dropdown-link-arrow-animated">
                                            <div class="nav-dropdown-link-arrow"></div>
                                        </div>
                                    </div>
                                </div>
                                <nav class="nav-dropdown-list w-dropdown-list">
                                    <div class="nav-dropdown-list-content">
                                        <div class="w-layout-grid nav-dropdown-grid">
                                            <div class="nav-dropdown-column">
                                                <div class="nav-dropdown-heading">Pages</div>
                                                <ul role="list" class="nav-list">
                                                    <li class="nav-dropdown-item">
                                                        <a href="/" class="nav-link white-nav-link w-inline-block">
                                                            <div>Main / Demo</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/home" aria-current="page" class="nav-link white-nav-link w-inline-block w--current">
                                                            <div>Home</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/pricing" class="nav-link white-nav-link w-inline-block">
                                                            <div>Pricing</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/agenda" class="nav-link white-nav-link w-inline-block">
                                                            <div>Agenda</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/speakers" class="nav-link white-nav-link w-inline-block">
                                                            <div>Speakers</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/shop" class="nav-link white-nav-link w-inline-block">
                                                            <div>Shop</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/insights" class="nav-link white-nav-link w-inline-block">
                                                            <div>Insights</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/contact" class="nav-link white-nav-link w-inline-block">
                                                            <div>Contact</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="nav-dropdown-line-abs"></div>
                                            </div>
                                            <div class="nav-dropdown-column">
                                                <div class="nav-dropdown-heading">Other pages</div>
                                                <ul role="list" class="nav-list">
                                                    <li class="nav-dropdown-item">
                                                        <a href="/product/vip" class="nav-link white-nav-link w-inline-block">
                                                            <div>Ticket</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/agenda/good-ideas" class="nav-link white-nav-link w-inline-block">
                                                            <div>Agenda Detail</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/speakers/drenusha-ademaj" class="nav-link white-nav-link w-inline-block">
                                                            <div>Speaker Detail</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/post/discovering-webflow" class="nav-link white-nav-link w-inline-block">
                                                            <div>Post Detail</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/category/full-access" class="nav-link white-nav-link w-inline-block">
                                                            <div>Shop Category</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/checkout" class="nav-link white-nav-link w-inline-block">
                                                            <div>Checkout</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/401" class="nav-link white-nav-link w-inline-block">
                                                            <div>Password</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/404" class="nav-link white-nav-link w-inline-block">
                                                            <div>Not found - 404</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="nav-dropdown-line-abs"></div>
                                            </div>
                                            <div class="nav-dropdown-column">
                                                <div class="nav-dropdown-heading">utility</div>
                                                <ul role="list" class="nav-list">
                                                    <li class="nav-dropdown-item">
                                                        <a href="/template/style-guide" class="nav-link white-nav-link w-inline-block">
                                                            <div>Style Guide</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/template/licensing" class="nav-link white-nav-link w-inline-block">
                                                            <div>Licensing</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/template/change-log" class="nav-link white-nav-link w-inline-block">
                                                            <div>Change Log</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/template/instructions" class="nav-link white-nav-link w-inline-block">
                                                            <div>Instructions</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="/blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Blank Page</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="nav-dropdown-heading">Premium</div>
                                                <ul role="list" class="nav-list">
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://webflow.com/templates/designers/azwedo" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Premium Templates</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="mailto:Template Support?subject=hello%40azwedo.com" class="nav-link white-nav-link w-inline-block">
                                                            <div>Designer Support</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="nav-dropdown-line-abs"></div>
                                            </div>
                                            <div class="nav-dropdown-column">
                                                <div class="nav-dropdown-heading">Follow us</div>
                                                <ul role="list" class="nav-list">
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://fb.com/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Facebook</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://twitter.com/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Twitter</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://www.linkedin.com/company/wedoflow/" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Linkedin</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://pinterest.com/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Pinterest</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://landdding.com/u/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Landdding</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://instagram.com/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Instagram</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://www.tiktok.com/@wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Tiktok</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://behance.net/wedoflow" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Behance</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-dropdown-item">
                                                        <a href="https://dribbble.com/azwedo" target="_blank" class="nav-link white-nav-link w-inline-block">
                                                            <div>Dribbble</div>
                                                            <div class="link-background link-bg-on-dark"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="nav-dropdown-footer">
                                            <div class="content">
                                                <div>© - with 🤍 from <a href="https://azwedo.com?ref=template" target="_blank" class="whilte-link">Azwedo</a> &amp; <a href="https://wedoflow.com?ref=template" target="_blank" class="whilte-link">Wedoflow</a></div>
                                            </div>
                                            <div class="content">
                                                <div>Free Figma file</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="nav-link-holder">
                            <a href="/speakers" class="nav-link w-inline-block">
                                <div>Speakers</div>
                                <div class="link-background"></div>
                            </a>
                        </div>
                        <div class="nav-link-holder nav-button-holder">
                            <a href="/contact" class="button nav-button w-inline-block">
                                <div>Contact</div>
                            </a>
                        </div>
                        </nav>
                        <div class="nav-menu-overlay-mobile"></div>
                        <div class="nav-cart-holder">
                            <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          value
          unit
          decimalValue
          string
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        value
        unit
        decimalValue
        string
      }
      total {
        value
        unit
        decimalValue
        string
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          f__draft_0ht
          f__archived_0ht
          f_ec_product_type_2dr10dr {
            id
            name
          }
          f_name_
          f_sku_properties_3dr {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          value
          unit
          decimalValue
          string
        }
        sku {
          cmsLocaleId
          f__draft_0ht
          f__archived_0ht
          f_main_image_4dr {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    id
    commerce {
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper cart"><a href="#" data-node-type="commerce-cart-open-link" aria-haspopup="dialog" aria-label="Open cart" role="button" class="w-commerce-commercecartopenlink cart-button w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e69d_Cart.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="cart-image"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity-number">0</div><div class="link-background"></div></a>
                                <div
                                    data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper">
                                    <div role="dialog" data-node-type="commerce-cart-container" class="w-commerce-commercecartcontainer cart-container">
                                        <div class="w-commerce-commercecartheader cart-header">
                                            <h4 class="w-commerce-commercecartheading cart-title">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" role="button" aria-label="Close cart" class="w-commerce-commercecartcloselink cart-close-button w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e69e_x.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="x-icon"/></a></div>
                                        <div
                                            class="w-commerce-commercecartformwrapper cart-form-wrapper">
                                            <form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform cart-default-state">
                                                <script type="text/x-wf-template" id="wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0ba4">%3Cdiv%20class%3D%22w-commerce-commercecartitem%20cart-item%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20cart-item-image%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20cart-item-content%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20cart-item-title%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22cart-item-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0baa%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522cart-item-option-text%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%2520class%253D%2522cart-item-option-text%2522%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522cart-item-option-text%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%20cart-item-option-list%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0baa%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22cart-item-option-text%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22cart-item-option-text%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-item-option-text%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Cdiv%20class%3D%22quantity-wrapper%22%3E%3Cdiv%20class%3D%22quantity-text%22%3EQuantiy%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%20cart-quantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20aria-label%3D%22Remove%20item%20from%20cart%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22remove-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E</script>
                                                <div
                                                    class="w-commerce-commercecartlist cart-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0ba4">
                                                    <div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                                                            src="" alt="" class="w-commerce-commercecartitemimage cart-item-image w-dyn-bind-empty" />
                                                        <div class="w-commerce-commercecartiteminfo cart-item-content">
                                                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                                                class="w-commerce-commercecartproductname cart-item-title w-dyn-bind-empty"></div>
                                                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                                                class="cart-item-price">$ 0.00 USD</div>
                                                            <script type="text/x-wf-template" id="wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0baa">%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22cart-item-option-text%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22cart-item-option-text%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-item-option-text%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E</script>
                                                            <ul
                                                                data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                                                                class="w-commerce-commercecartoptionlist cart-item-option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-280cf9f6-cee2-8e11-32a8-8b06750d0baa">
                                                                <li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                                                        class="cart-item-option-text w-dyn-bind-empty"></span><span class="cart-item-option-text">: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                                                        class="cart-item-option-text w-dyn-bind-empty"></span></li>
                                                                </ul>
                                                                <div class="quantity-wrapper">
                                                                    <div class="quantity-text">Quantiy</div><input aria-label="Update quantity" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                                                        data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
                                                                        class="w-commerce-commercecartquantity cart-quantity" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity"
                                                                        data-commerce-sku-id="" value="1" /></div>
                                                        </div>
                                                        <a href="#" role="button" aria-label="Remove item from cart" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                                            class="remove-button w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="">
                                                            <div>Remove</div>
                                                        </a>
                                                    </div>
                                    </div>
                                    <div class="w-commerce-commercecartfooter cart-footer">
                                        <div aria-atomic="true" aria-live="polite" class="w-commerce-commercecartlineitem">
                                            <div class="cart-subtotal-label">Subtotal</div>
                                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                                                class="w-commerce-commercecartordervalue cart-subtotal-price"></div>
                                        </div>
                                        <div>
                                            <div data-node-type="commerce-cart-quick-checkout-actions" style="display:none" class="web-payments">
                                             </div>
                                            <a
                                                href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a>
                                        </div>
                                    </div>
                                    </form>
                                    <div class="w-commerce-commercecartemptystate"><a href="/shop" class="button w-button">View ALL</a></div>
                                    <div aria-live="assertive" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-message">
                                        <div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site."
                                            data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="menu-button w-nav-button"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e691_menu-icon.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="menu-icon" /></div>
    </div>
    <div class="nav-bg-blur"></div>
    </div>
    </div>
    <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1fe61" class="home-hero-section">
        <div class="hero-container-sticky">
            <div class="container">
                <div class="w-layout-grid grid-6-columns">
                    <div id="w-node-d0e0a395-1147-aac5-db53-ca795f86db0b-5f86db0a" class="hero-grid-content">
                        <div class="hero-content-1">
                            <div class="hero-grid-content-1">
                                <h1 class="hero-title">The <a href="https://generativeai.net/">genAI</a> Conference is here</h1>
                                <div class="hero-button-wrap">
                                    <a href="#When" class="button second-button w-inline-block">
                                        <div>When?</div>
                                        <div class="button-arrow-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024" app="ikonik" class="button-right-arrow-icon"><path fill="currentColor" d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" app="ikonik"></path></svg></div>
                                    </a>
                                </div>
                                <div class="hero-grid-content-gradient"></div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-d0e0a395-1147-aac5-db53-ca795f86db1b-5f86db0a" class="hero-grid-content">
                        <div class="hero-grid-content-2">
                            <h1 class="hero-title">17.<br/>November<br/>.2024</h1>
                            <div class="hero-button-wrap">
                                <a href="#Where" class="button second-button w-inline-block">
                                    <div>Where?</div>
                                    <div class="button-arrow-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024" app="ikonik" class="button-right-arrow-icon"><path fill="currentColor" d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" app="ikonik"></path></svg></div>
                                </a>
                            </div>
                            <div class="hero-grid-content-gradient center-gradient"></div>
                        </div>
                    </div>
                    <div id="w-node-d0e0a395-1147-aac5-db53-ca795f86db2b-5f86db0a" class="hero-grid-content">
                        <div class="hero-grid-content-3">
                            <h1 class="hero-title">Join us for a virtual conference</h1>
                            <div class="hero-grid-content-gradient right-gradient"></div>
                        </div>
                    </div>
                </div>
                <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    class="big-button-holder">
                    <div class="container hero-big-button-container">
                        <div class="hero-button-wrap">
                            <a href="#What" data-w-id="42e1f628-ef09-3da7-9658-bedb602ae676" class="button second-button w-inline-block">
                                <div>Start Now</div>
                                <div class="button-arrow-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024" app="ikonik" class="button-right-arrow-icon"><path fill="currentColor" d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" app="ikonik"></path></svg></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-down-anim">
                <div class="scroll-lottie-animation" data-w-id="ed2010ce-7c10-3da7-7ef0-67012241355d" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f82c80692a2d1ce1236060_Mouse-Scrolling.json" data-loop="1"
                    data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.6" data-duration="0"></div>
            </div>
            <div class="big-text-wrap">
                <div class="two-lines-text-wrap">
                    <div class="hero-main-text-container">
                        <div class="hero-big-text-holder">
                            <h1 class="hero-main-text">GEN-AI SUMMIT</h1>
                            <h1 class="hero-main-text">GEN-AI SUMMIT</h1>
                            <h1 class="hero-main-text">GEN-AI SUMMIT</h1>
                            <h1 class="hero-main-text">GEN-AI SUMMIT</h1>
                            <h1 class="hero-main-text">GEN-AI SUMMIT</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-bg-wrap">
            <div class="home-hero-video-wrap"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash.webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                    srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65f8352e4ad146008a6ce734_dan-taylor-PEYWee15Xjs-unsplash.webp 1920w"
                    alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="home-hero-image" />
                <div style="opacity:1" class="home-hero-gradient">
                    <div class="hero-grid-wrapper">
                        <div class="hero-grid-shapes"></div>
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(3, 3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(3, 3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(3, 3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(3, 3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                            class="hero-grid-holder">
                            <div id="w-node-_2ea9dfe3-a4eb-febc-b138-4d231c6b2020-dda8e6e5" class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                            <div class="hero-grid-cell"></div>
                        </div>
                        <div style="opacity:0" class="hero-gradient-cursor">
                            <div class="hero-grid-gradient"></div>
                        </div>
                        <div style="opacity:0" class="hero-grid-border-colors"></div>
                    </div>
                    <div class="home-grid-side-gradient"></div>
                </div>
            </div>
        </div>
        <div id="What" class="hero-ids"></div>
        <div id="When" class="hero-ids second-id"></div>
        <div id="Where" class="hero-ids third-id"></div>
    </div>
    <div class="main-section">
        <div class="w-layout-grid grid-6-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fedf-dda8e6e5" class="grid-content-flex">
                <p data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1fee0" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Mohamed will give a lecture:</p>
                <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1fee2" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="bold-text">Join us for a virtual conference experience of 2025</h2>
            </div>
        </div>
    </div>
    <div class="main-section no-lr-padding">
        <div class="w-layout-grid grid-8-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fee6-dda8e6e5" class="grid-content-flex stretch">
                <div class="content-link-help">
                    <div class="overflow-hidden">
                        <p class="big-text">Design Thinking &amp; Innovation Week 2025 Overview</p>
                    </div>
                    <a href="#Organizers" class="help-link-container w-inline-block">
                        <div class="help-link-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="help-link-icon"
                            /></div>
                        <div class="help-link-scroll-text">Get me there</div>
                    </a>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fef0-dda8e6e5" class="grid-content-flex stretch">
                <div class="content-link-help">
                    <div class="overflow-hidden">
                        <p class="big-text">Insights from previous years</p>
                    </div>
                    <a href="#PreviousYears" class="help-link-container w-inline-block">
                        <div class="help-link-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="help-link-icon"
                            /></div>
                        <div class="help-link-scroll-text">Scroll</div>
                    </a>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fefa-dda8e6e5" class="grid-content-flex stretch">
                <div class="content-link-help">
                    <div class="overflow-hidden">
                        <p class="big-text">Check out day-by-day event details with agenda and speakers</p>
                    </div>
                    <a href="#EventPlanSection" class="help-link-container w-inline-block">
                        <div class="help-link-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="help-link-icon"
                            /></div>
                        <div class="help-link-scroll-text">Show me</div>
                    </a>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff04-dda8e6e5" class="grid-content-flex stretch">
                <div class="content-link-help last">
                    <div class="overflow-hidden">
                        <p class="big-text">Design Thinking &amp; Innovation Week 2025 Pricing List</p>
                    </div>
                    <a href="#PricingSection" class="help-link-container w-inline-block">
                        <div class="help-link-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="help-link-icon"
                            /></div>
                        <div class="help-link-scroll-text">Get me there</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section no-padding">
        <div class="w-layout-grid grid-8-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff10-dda8e6e5" class="grid-content-flex">
                <div class="w-layout-grid grid-8-columns">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff12-dda8e6e5" class="grid-content-flex vertical-stretch">
                        <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ff13" class="image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1).webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                                srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1)-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1)-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda418ba60ce8cde1be12d_headway-F2KRf_QfCqw-unsplash%20(1).webp 1920w"
                                alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="image-fit-cover" /></div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff15-dda8e6e5" class="grid-content-flex vertical-stretch">
                        <div class="image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash.webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                                srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash.webp 1920w"
                                alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="image-fit-cover" /></div>
                    </div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff18-dda8e6e5" class="grid-content-flex vertical-center with-space">
                <p data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ff19" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">From the ground up</p>
                <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ff1b" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">We aim to:<br/>Do things right</h2>
            </div>
        </div>
    </div>
    <div class="main-section no-padding">
        <div class="w-layout-grid grid-8-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff21-dda8e6e5" class="grid-content-flex">
                <div class="image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1).webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                        srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1)-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1)-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda412d731f871f2373839_dan-taylor-N0XFUbFVPFg-unsplash%20(1).webp 1920w"
                        alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="image-fit-cover" /></div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff24-dda8e6e5" class="grid-content-flex vertical-center with-space">
                <h2>Workshop</h2>
                <div class="opacity-80">
                    <p class="big-text">Mauris tristique est ac cursus fringilla. Praesent eleifend felis ac mauris vehicula sodales. Cras elementum quis ipsum eget dignissim. </p>
                </div>
                <div id="w-node-_13efe4bc-2f56-5e96-a422-9ff508af60c2-dda8e6e5" class="section-logo-list">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2e-dda8e6e5" class="grid-content-flex"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d8_Trusted%20Comany%20Logo%2010.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="workshop-brand-image"
                        /></div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2c-dda8e6e5" class="grid-content-flex"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d1_Trusted%20Comany%20Logo%203.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="workshop-brand-image"
                        /></div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff2a-dda8e6e5" class="grid-content-flex"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fd897cc89af5aaea833c9f_Qatar%20light.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="workshop-brand-image"
                        /></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff30-dda8e6e5" class="grid-content-flex vertical-center with-space">
                <h2>OPENING PARTY &amp; EARLY REGISTRATION</h2>
                <div class="opacity-80">
                    <p class="big-text">Cras elementum quis ipsum eget dignissim. Mauris tristique est ac cursus fringilla.</p>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff35-dda8e6e5" class="grid-content-flex">
                <div class="image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash.webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                        srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/65fda41bb77ee9340a6520de_teemu-paananen-bzdhc5b3Bxs-unsplash.webp 1920w"
                        alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="image-fit-cover" /></div>
            </div>
        </div>
    </div>
    <div class="main-section no-padding">
        <div id="Organizers" class="main-section">
            <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ff3a" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                class="semibold-text">Organizers</h2>
        </div>
        <div class="w-layout-grid organizers-grid">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff3d-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d8_Trusted%20Comany%20Logo%2010.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo main"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff41-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d6_Trusted%20Comany%20Logo%206.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff45-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d7_Trusted%20Comany%20Logo%201.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff49-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d8_Trusted%20Comany%20Logo%2010.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff4d-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6e9_Trusted%20Comany%20Logo%209.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff51-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d9_Trusted%20Comany%20Logo%204.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                    />
                    <div class="organizer-borders"></div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff55-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content">
                    <div class="organizers-grid-sponsor">
                        <div>&amp; Co Sponsors</div>
                    </div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5a-dda8e6e5" class="grid-content-flex">
                <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6ed_Brand%20Logo.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo" />
                    <div
                        class="organizer-borders"></div>
            </div>
        </div>
        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff5e-dda8e6e5" class="grid-content-flex">
            <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d2_Trusted%20Comany%20Logo%208.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                />
                <div class="organizer-borders"></div>
            </div>
        </div>
        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff62-dda8e6e5" class="grid-content-flex">
            <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d5_Trusted%20Comany%20Logo%207.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                />
                <div class="organizer-borders"></div>
            </div>
        </div>
        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ff66-dda8e6e5" class="grid-content-flex">
            <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d3_Trusted%20Comany%20Logo%205.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                />
                <div class="organizer-borders"></div>
            </div>
        </div>
    </div>
    </div>
    <div id="PreviousYears" class="main-section previous-years">
        <div data-delay="6000" data-animation="fade" class="years-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="0" data-infinite="true">
            <div class="years-slider-mask w-slider-mask">
                <div class="years-slide w-slide">
                    <div class="years-slide-content">
                        <div class="years-slide-image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash.webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                                srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587cee6aed98602fcf8_andrei-stratu-kcJsQ3PJrYU-unsplash.webp 1920w"
                                alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="years-slide-image" />
                            <div class="background-overlay opacity50"></div>
                        </div>
                        <div class="years-slide-text">
                            <div class="years-header">
                                <h2 class="semibold-text white-text">Previous Years</h2>
                            </div>
                            <div class="years-slide-text-container">
                                <div>
                                    <div class="hero-title slider-title">2024</div>
                                </div>
                                <div>
                                    <h3 class="slider-description">Artificial intelligence and the Future</h3>
                                </div>
                            </div></div>
                    </div>
                </div>
                <div class="years-slide w-slide">
                    <div class="years-slide-content">
                        <div class="years-slide-image-container"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash.webp" loading="lazy" sizes="(max-width: 479px) 98vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, (max-width: 1919px) 99vw, 100vw"
                                srcset="https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash-p-500.webp 500w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash-p-800.webp 800w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash-p-1080.webp 1080w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash-p-1600.webp 1600w, https://assets-global.website-files.com/65f7620eb79b01d8dda8e5d9/66016587a992d3b6786ca277_linkedin-sales-solutions-W3Jl3jREpDY-unsplash.webp 1920w"
                                alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="years-slide-image" />
                            <div class="background-overlay opacity50"></div>
                        </div>
                        <div class="years-slide-text">
                            <div class="years-header">
                                <h2 class="semibold-text white-text">Previous Years</h2>
                            </div>
                            <div class="years-slide-text-container">
                                <div>
                                    <div class="hero-title slider-title">2025</div>
                                </div>
                                <div>
                                    <h3 class="slider-description">The Technology &amp; the general intelligence of every product</h3>
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
            <div class="yars-slider-left-arrow w-slider-arrow-left"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="years-slider-icon rotate"
                /></div>
            <div class="years-slider-right-arrow w-slider-arrow-right"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="years-slider-icon" /></div>
            <div
                class="years-slide-nav w-slider-nav w-round"></div>
    </div>
    <div class="background-slider"></div>
    </div>
    <div id="EventPlanSection" class="main-section">
        <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ff9c" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
            class="bold-text">Event Plan</h2>
    </div>
    <div class="main-section overflow-visible">
        <div class="w-layout-grid grid-6-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa0-dda8e6e5" class="grid-content-flex">
                <div class="content-sticky-2">
                    <h2>Nov 17</h2>
                    <p class="big-text">Let’s change the world together with Gen AI.</p>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa6-dda8e6e5" class="grid-content-flex">
                <div class="event-day-description-container">
                    <div class="w-layout-grid grid-6-columns">
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffa9-dda8e6e5" class="grid-content-flex">
                            <h4>DESIGN THINKING &amp; INNOVATION WEEK</h4>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffac-dda8e6e5" class="grid-content-flex">
                            <div class="opacity-80">
                                <div>An immersive programme for creative entrepreneurs, innovation directors and business owners – introducing you to London&#x27;s most innovative businesses and uncovering the latest approaches to design thinking and innovation.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agenda-cms-wrapper w-dyn-list">
                    <div role="list" class="agenda-grid homepage w-dyn-items">
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb1-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/tools-can-support-us-and-save-time" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6d1f8df59b086e3f87f_google-deepmind-K4YzNrQUoZ4-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Tools can support us and save time</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb1-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/my-time-to-pay-back-to-the-community" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6ff0de08fa8f40389ba_google-deepmind-_TyNU3me7g0-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">My time to pay back to the community</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb1-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/prediction-method-used-in-large-language-models" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Prediction method used in large language models</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb1-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/good-ideas" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">How to think actively of Good Ideas</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="w-layout-grid attendees-grid">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffb6-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content attendees-main-content">
                            <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ffb8" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">
                                <div>ATTENDEES</div>
                                <h2 class="bold-text">+150</h2>
                            </div>
                            <div class="organizer-borders with-background"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffbe-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d5_Trusted%20Comany%20Logo%207.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc2-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6e9_Trusted%20Comany%20Logo%209.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffc6-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d9_Trusted%20Comany%20Logo%204.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffca-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d3_Trusted%20Comany%20Logo%205.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                </div>
                <div class="heading-container">
                    <h3 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ffcf" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                        class="semibold-text">Speakers</h3>
                </div>
                <div class="speakers-grid-wrapper w-dyn-list">
                    <div role="list" class="speakers-grid homepage w-dyn-items">
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffd3-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/drenusha-ademaj" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc8945c957d482970d1_6492fe560c3eafe75f9f12b4_speaker5.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Drenusha Ademaj</div>
                                    </div>
                                    <div>Project Manager at CompanyX</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffd3-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/bjeshkor-kosova" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7d8fc0dd4eeb368ff_6492fe560c3eafe75f9f12b1_speaker2.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Bjeshkor Kosova</div>
                                    </div>
                                    <div>Executive Leader</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffd3-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/shqipe-kastrati" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7982a430225e7ffaf_6492fe560c3eafe75f9f12b3_speaker4.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Shqipe Kastrati</div>
                                    </div>
                                    <div>Lead designer at Company</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffd3-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/kastriot-berisha" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7f6e4a02aa616d41d_6492fe560c3eafe75f9f12b2_speaker3.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Kastriot Berisha</div>
                                    </div>
                                    <div>Product Designer at Company</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1ffd7" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="primary-quote-box">
                    <h3 class="no-margin">98% of the participants find that the Product program was valuable for their experience.</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section overflow-visible">
        <div class="w-layout-grid grid-6-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffdc-dda8e6e5" class="grid-content-flex">
                <div class="content-sticky-2">
                    <h2>Nov 18</h2>
                    <p class="big-text">Let’s change the world together with Gen AI.</p>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe2-dda8e6e5" class="grid-content-flex">
                <div class="event-day-description-container">
                    <div class="w-layout-grid grid-6-columns">
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe5-dda8e6e5" class="grid-content-flex">
                            <h4 class="semibold-text">DesignThinkers is the must-attend event of the year for visual communicators.</h4>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1ffe8-dda8e6e5" class="grid-content-flex">
                            <div>An immersive programme for creative entrepreneurs, innovation directors and business owners – introducing you to London&#x27;s most innovative businesses and uncovering the latest approaches to design thinking and innovation.</div>
                        </div>
                    </div>
                </div>
                <div class="agenda-cms-wrapper w-dyn-list">
                    <div role="list" class="agenda-grid homepage w-dyn-items">
                        <div id="w-node-c0b2a8d1-8c84-6ea9-0781-a7fde946dff8-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/staying-in-the-bubble" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa6efcd41a6583f15557e_google-deepmind-oWeN0djYJGM-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Staying in the reach bubble</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c0b2a8d1-8c84-6ea9-0781-a7fde946dff8-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/prediction-method-used-in-large-language-models" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Prediction method used in large language models</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-c0b2a8d1-8c84-6ea9-0781-a7fde946dff8-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/good-ideas" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa736f59271e8c9191ca7_google-deepmind-b8GH92xVoUw-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">How to think actively of Good Ideas</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="w-layout-grid attendees-grid">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fff2-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content attendees-main-content">
                            <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c1fff4" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">
                                <div>ATTENDEES</div>
                                <h2 class="bold-text">+90</h2>
                            </div>
                            <div class="organizer-borders with-background"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffa-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d3_Trusted%20Comany%20Logo%205.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c1fffe-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d4_Trusted%20Comany%20Logo%202.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20002-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d9_Trusted%20Comany%20Logo%204.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20006-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d6_Trusted%20Comany%20Logo%206.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                </div>
                <div class="heading-container">
                    <h3 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c2000b" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                        class="semibold-text">Speakers</h3>
                </div>
                <div class="speakers-grid-wrapper w-dyn-list">
                    <div role="list" class="speakers-grid homepage w-dyn-items">
                        <div id="w-node-_57e7d082-2a92-eae8-331c-ec48009aa08b-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/drenusha-ademaj" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc8945c957d482970d1_6492fe560c3eafe75f9f12b4_speaker5.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Drenusha Ademaj</div>
                                    </div>
                                    <div>Project Manager at CompanyX</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-_57e7d082-2a92-eae8-331c-ec48009aa08b-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/bjeshkor-kosova" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7d8fc0dd4eeb368ff_6492fe560c3eafe75f9f12b1_speaker2.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Bjeshkor Kosova</div>
                                    </div>
                                    <div>Executive Leader</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-_57e7d082-2a92-eae8-331c-ec48009aa08b-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/teuta-shala" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7146140b9533ec486_6492fe560c3eafe75f9f12b0_speaker1.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Teuta Shala</div>
                                    </div>
                                    <div>Creative Director &amp; Lead designer</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-_57e7d082-2a92-eae8-331c-ec48009aa08b-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/kastriot-berisha" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7f6e4a02aa616d41d_6492fe560c3eafe75f9f12b2_speaker3.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Kastriot Berisha</div>
                                    </div>
                                    <div>Product Designer at Company</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c20013" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="primary-quote-box">
                    <h3 class="no-margin">98% of the participants find that the Product program was valuable for their experience.</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section overflow-visible">
        <div class="w-layout-grid grid-6-columns">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20018-dda8e6e5" class="grid-content-flex">
                <div class="content-sticky-2">
                    <h2>Nov 19</h2>
                    <p class="big-text">Final day - Go digital, your company needs it</p>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2001e-dda8e6e5" class="grid-content-flex">
                <div class="event-day-description-container">
                    <div class="w-layout-grid grid-6-columns">
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20021-dda8e6e5" class="grid-content-flex">
                            <h4 class="semibold-text">Design Thinking is the must-attend event of the year for visual communicators.</h4>
                        </div>
                        <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20024-dda8e6e5" class="grid-content-flex">
                            <div>An immersive programme for creative entrepreneurs, innovation directors and business owners – introducing you to London&#x27;s most innovative businesses and uncovering the latest approaches to design thinking and innovation.</div>
                        </div>
                    </div>
                </div>
                <div class="agenda-cms-wrapper w-dyn-list">
                    <div role="list" class="agenda-grid homepage w-dyn-items">
                        <div id="w-node-d008e3af-389d-55f0-302f-ce9e50feb30e-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/language-models-which-generate-text" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa69326b56479d451828f_google-deepmind-jJMqaZU4EnU-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Language models which generate text</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-d008e3af-389d-55f0-302f-ce9e50feb30e-dda8e6e5" role="listitem" class="agenda-item w-dyn-item">
                            <a href="/agenda/prediction-method-used-in-large-language-models" class="agenda-link-block w-inline-block">
                                <div class="agenda-item-image-holder"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg" sizes="(max-width: 479px) 61vw, (max-width: 767px) 45vw, (max-width: 991px) 91vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 49vw"
                                        srcset="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/660aa70d13a032322961210b_google-deepmind-yyl3iDuS3s8-unsplash.jpg 1920w"
                                        class="agenda-item-image" />
                                    <div class="agenda-item-title-holder">
                                        <div class="agenda-item-title">Prediction method used in large language models</div>
                                    </div>
                                </div>
                                <div class="agenda-item-content">
                                    <p>Positioning can make or break a new product, yet it rarely gets the attention it deserves. In this talk.</p>
                                    <div class="agenda-item-link-container">
                                        <div class="agenda-item-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0caa9_arrow-right-black.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="agenda-item-icon"
                                            /></div>
                                        <div class="agenda-link-text">View Details</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="w-layout-grid attendees-grid">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2002e-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content attendees-main-content">
                            <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c20030" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">
                                <div>ATTENDEES</div>
                                <h2 class="bold-text">+90</h2>
                            </div>
                            <div class="organizer-borders with-background"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20036-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d5_Trusted%20Comany%20Logo%207.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003a-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6e9_Trusted%20Comany%20Logo%209.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2003e-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d1_Trusted%20Comany%20Logo%203.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20042-dda8e6e5" class="grid-content-flex">
                        <div class="organizer-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d2_Trusted%20Comany%20Logo%208.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="organizer-logo"
                            />
                            <div class="organizer-borders"></div>
                        </div>
                    </div>
                </div>
                <div class="heading-container">
                    <h3 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c20047" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                        class="semibold-text">Speakers</h3>
                </div>
                <div class="speakers-grid-wrapper w-dyn-list">
                    <div role="list" class="speakers-grid homepage w-dyn-items">
                        <div id="w-node-_3f7b4a43-dc2f-ebd1-90d5-60af9c6e4fc7-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/drenusha-ademaj" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc8945c957d482970d1_6492fe560c3eafe75f9f12b4_speaker5.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Drenusha Ademaj</div>
                                    </div>
                                    <div>Project Manager at CompanyX</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-_3f7b4a43-dc2f-ebd1-90d5-60af9c6e4fc7-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/shqipe-kastrati" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7982a430225e7ffaf_6492fe560c3eafe75f9f12b3_speaker4.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Shqipe Kastrati</div>
                                    </div>
                                    <div>Lead designer at Company</div>
                                </div>
                            </a>
                        </div>
                        <div id="w-node-_3f7b4a43-dc2f-ebd1-90d5-60af9c6e4fc7-dda8e6e5" role="listitem" class="speaker-item w-dyn-item">
                            <a href="/speakers/kastriot-berisha" class="speaker-link-block small w-inline-block">
                                <div class="speaker-image-container small"><img loading="lazy" alt="" src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e66b/66018cc7f6e4a02aa616d41d_6492fe560c3eafe75f9f12b2_speaker3.jpeg" class="speaker-item-image small" />
                                    <div class="speaker-icon-holder"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/6601a0b1b8508b353ad74571_arrow-right.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="speaker-icon"
                                        /></div>
                                </div>
                                <div class="speaker-item-details small">
                                    <div class="speaker-item-title">
                                        <div class="text-bigger">Kastriot Berisha</div>
                                    </div>
                                    <div>Product Designer at Company</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c2004f" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="primary-quote-box with-picture"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f762ae32f5045d06f0ca99_Avatar%20Testemonial.png" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="quote-box-image"
                    />
                    <div class="primary-quote-text">
                        <h4 class="no-margin">&quot;For me, QE is a unique event, because it connects people around the idea related to the fascination with quality.&quot;</h4>
                        <div class="quote-box-name"><strong>Elston Gullan</strong><br/>Managing Director at LightAI</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section no-padding">
        <div id="PricingSection" class="main-section">
            <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c2005b" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                class="bold-text">Pricing</h2>
        </div>
        <div class="w-layout-grid pricing-table-grid">
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2005e-dda8e6e5" class="grid-content-flex">
                <div class="product-collection-wrapper w-dyn-list">
                    <div role="list" class="product-collection-list w-dyn-items">
                        <div role="listitem" class="product-collection-item w-dyn-item">
                            <div>
                                <div class="pricing-table-content">
                                    <div class="pricing-table-content-header">
                                        <div class="pricing-holder">
                                            <div class="pricing-title xl">$199</div>
                                            <div class="pricing-type-2 xl">VIP Access</div>
                                        </div>
                                        <p class="price-item-summary">VIP Ticket. Take place at every conference. This will include all three days.</p>
                                        <a href="/product/vip" class="pricing-link w-inline-block">
                                            <div class="semibold-text">View Details</div>
                                            <div class="link-underline"></div>
                                        </a>
                                    </div>
                                    <div class="pricing-button-wrap full-width">
                                        <div>
                                            <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="6601a30215ece7d21fcb7fca" data-loading-text="Adding to cart..." data-commerce-product-id="6601a30215ece7d21fcb7fa0" class="w-commerce-commerceaddtocartform"><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-9f9652b504b0fc2eeb567678ca6f34b7" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput hide"
                                                    value="1" /><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button big-add-to-cart"
                                                    value="Add to Cart" /></form>
                                            <div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
                                                <div>This product is out of stock.</div>
                                            </div>
                                            <div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror">
                                                <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                                    data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                                    data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing-borders primary"></div>
                                <div class="background-primary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20065-dda8e6e5" class="grid-content-flex">
                <div class="product-collection-wrapper w-dyn-list">
                    <div role="list" class="product-collection-list w-dyn-items">
                        <div role="listitem" class="product-collection-item w-dyn-item">
                            <div>
                                <div class="pricing-table-content small">
                                    <div class="pricing-table-content-header">
                                        <div class="pricing-holder">
                                            <div class="pricing-title">$99</div>
                                            <div class="pricing-type-3">Guest Access</div>
                                        </div>
                                        <div class="price-item-summary-wrap">
                                            <p class="price-item-summary">Guest Ticket. Take place at every conference. This will include all three days.</p>
                                        </div>
                                        <a href="/product/guest" class="pricing-link w-inline-block">
                                            <div class="semibold-text">View Details</div>
                                            <div class="link-underline"></div>
                                        </a>
                                    </div>
                                    <div class="pricing-button-wrap full-width">
                                        <div>
                                            <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="6601a30215ece7d21fcb7fd0" data-loading-text="Adding to cart..." data-commerce-product-id="6601a30215ece7d21fcb7f98" class="w-commerce-commerceaddtocartform"><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-9f9652b504b0fc2eeb567678ca6f34b7" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput hide"
                                                    value="1" /><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button"
                                                    value="Add to Cart" /></form>
                                            <div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
                                                <div>This product is out of stock.</div>
                                            </div>
                                            <div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror">
                                                <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                                    data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                                    data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing-borders"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2006c-dda8e6e5" class="grid-content-flex">
                <div class="product-collection-wrapper w-dyn-list">
                    <div role="list" class="product-collection-list w-dyn-items">
                        <div role="listitem" class="product-collection-item w-dyn-item">
                            <div>
                                <div class="pricing-table-content small">
                                    <div class="pricing-table-content-header">
                                        <div class="pricing-holder">
                                            <div class="pricing-title">$149</div>
                                            <div class="pricing-type-3">Sponsor Access</div>
                                        </div>
                                        <div class="price-item-summary-wrap">
                                            <p class="price-item-summary">Sponsor Ticket. Take place at every conference. This will include all three days.</p>
                                        </div>
                                        <a href="/product/sponsor" class="pricing-link w-inline-block">
                                            <div class="semibold-text">View Details</div>
                                            <div class="link-underline"></div>
                                        </a>
                                    </div>
                                    <div class="pricing-button-wrap full-width">
                                        <div>
                                            <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="6601a30215ece7d21fcb7fd2" data-loading-text="Adding to cart..." data-commerce-product-id="6601a30215ece7d21fcb7f9c" class="w-commerce-commerceaddtocartform"><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-9f9652b504b0fc2eeb567678ca6f34b7" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput hide"
                                                    value="1" /><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button"
                                                    value="Add to Cart" /></form>
                                            <div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
                                                <div>This product is out of stock.</div>
                                            </div>
                                            <div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror">
                                                <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                                    data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                                    data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing-borders"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section no-padding">
        <div class="main-section">
            <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c20075" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                class="semibold-text">Testimonials</h2>
        </div>
        <div class="testimonial-carousel-container">
            <div class="testimonials-wrap">
                <div style="-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    class="w-layout-grid testimonials-grid">
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c20079-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d8_Trusted%20Comany%20Logo%2010.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Tech AI Event = Worth it! Engaging sessions, practical takeaways, and great networking. Highly recommended!</div>
                                <div class="testimonial-author">Emily - CEO @ai</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-c08661d0-9d45-d5c1-2a9a-636bc1c2007f-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d4_Trusted%20Comany%20Logo%202.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Impressive lineup, practical insights! The Tech AI Event is a game-changer for anyone looking to harness the power of AI.</div>
                                <div class="testimonial-author">CEO @event</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-_9e504ec1-1655-e5de-dcb4-1cd54824d11c-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d3_Trusted%20Comany%20Logo%205.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Mind-blowing content, top-notch speakers! The Tech AI Event left me inspired and ready to dive deeper into AI technology.</div>
                                <div class="testimonial-author">Michael CTO @ corp</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-_131c1f58-7ee7-6062-90f6-0c2904e1957c-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d6_Trusted%20Comany%20Logo%206.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Impressive lineup, practical insights! The Tech AI Event is a game-changer for anyone looking to harness the power of AI.</div>
                                <div class="testimonial-author">CEO @event</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                </div>
                <div style="-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    class="w-layout-grid testimonials-grid">
                    <div id="w-node-a98c6d07-6863-d91f-9445-388b9a6bfe15-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d8_Trusted%20Comany%20Logo%2010.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Tech AI Event = Worth it! Engaging sessions, practical takeaways, and great networking. Highly recommended!</div>
                                <div class="testimonial-author">Emily - CEO @ai</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-a98c6d07-6863-d91f-9445-388b9a6bfe1e-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d4_Trusted%20Comany%20Logo%202.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Impressive lineup, practical insights! The Tech AI Event is a game-changer for anyone looking to harness the power of AI.</div>
                                <div class="testimonial-author">CEO @event</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-a98c6d07-6863-d91f-9445-388b9a6bfe27-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d3_Trusted%20Comany%20Logo%205.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Mind-blowing content, top-notch speakers! The Tech AI Event left me inspired and ready to dive deeper into AI technology.</div>
                                <div class="testimonial-author">Michael CTO @ corp</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                    <div id="w-node-a98c6d07-6863-d91f-9445-388b9a6bfe30-dda8e6e5" class="grid-content-flex">
                        <div class="testimonial-content"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6d6_Trusted%20Comany%20Logo%206.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="testimonial-logo"
                            />
                            <div class="testimonial-text-content">
                                <div class="testimonial-description">Impressive lineup, practical insights! The Tech AI Event is a game-changer for anyone looking to harness the power of AI.</div>
                                <div class="testimonial-author">CEO @event</div>
                            </div>
                            <div class="testimonial-borders"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-section large-padding">
        <div class="container">
            <div class="grid-content-flex centered">
                <h2 data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c200ad" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="semibold-text">Invite your friends</h2>
                <div class="text-container">
                    <p data-w-id="c08661d0-9d45-d5c1-2a9a-636bc1c200b0" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                        class="cta-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend felis ac mauris vehicula sodales. Cras elementum quis ipsum eget dignissim.</p>
                </div><a data-w-id="43200e2c-1f23-8530-f2c2-b090176d4e64" style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    href="/shop" class="button big-button w-button">Reserve Ticket</a></div>
        </div>
        <div class="cta-shapes-bg">
            <div class="home-grid-side-gradient"></div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="footer-content">
                <div id="w-node-_74ab3314-1e2b-a768-0bb3-b25894c1a502-0a144c54" class="content">
                    <div class="fade-in-move-on-scroll">
                        <div class="footer-brand-content"><a href="/home" aria-current="page" class="footer-logo-link w--current"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65fd897cc89af5aaea833c9f_Qatar%20light.svg" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="footer-image"/></a>
                            <div
                                class="footer-description">Where imagination meets innovation - unleash your creativity with us!</div>
                        <div class="social-media-icons"><a href="https://www.youtube.com/@wedoflow" target="_blank" class="social-media-link w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6cb_youtube.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="social-media-icon"/><div class="link-background"></div></a>
                            <a
                                href="https://linkedin.com/company/wedoflow" target="_blank" class="social-media-link w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6cd_linkedin.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="social-media-icon"
                                />
                                <div class="link-background"></div>
                                </a><a href="https://twitter.com/wedoflow" target="_blank" class="social-media-link w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6cc_x-twitter.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="social-media-icon"/><div class="link-background"></div></a>
                                <a
                                    href="https://fb.com/wedoflow" target="_blank" class="social-media-link w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6ca_facebook.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="social-media-icon"
                                    />
                                    <div class="link-background"></div>
                                    </a><a href="https://www.pinterest.com/wedoflow/" target="_blank" class="social-media-link w-inline-block"><img src="https://cdn.prod.website-files.com/65f7620eb79b01d8dda8e5d9/65f7620eb79b01d8dda8e6ce_pinterest.svg" loading="lazy" alt="Qatar Event Webflow Template - Designed by Azwedo.com and Wedoflow.com" class="social-media-icon"/><div class="link-background"></div></a></div>
                        <div
                            class="subscribe-form-holder w-form">
                            <form id="Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" method="get" class="subscribe-form" data-wf-page-id="65f7620eb79b01d8dda8e6e5" data-wf-element-id="94ad1a15-a764-a1ee-f194-0bd3f8dcd9cf"><input class="subscribe-email w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required="" /><input type="submit" data-wait="..." class="subscribe-button w-button" value="Subscribe"
                                /></form>
                            <div class="success-message w-form-done">
                                <div>Thank you! We got you!</div>
                            </div>
                            <div class="error-message w-form-fail">
                                <div>Oops! Something went wrong. Try again!</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-grid-content">
            <div class="footer-heading">Product</div>
            <div class="fade-in-move-on-scroll">
                <a href="/home" aria-current="page" class="footer-link w-inline-block w--current">
                    <div>Home</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/pricing" class="footer-link w-inline-block">
                    <div>Pricing</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/agenda" class="footer-link w-inline-block">
                    <div>Agenda</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/speakers" class="footer-link w-inline-block">
                    <div>Speakers</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="footer-grid-content second">
                <div class="footer-heading">Other</div>
                <div class="fade-in-move-on-scroll">
                    <a href="/shop" class="footer-link w-inline-block">
                        <div>Shop</div>
                        <div class="link-block-underline"></div>
                    </a>
                </div>
                <div class="fade-in-move-on-scroll">
                    <a href="/insights" class="footer-link w-inline-block">
                        <div>Insights</div>
                        <div class="link-block-underline"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-grid-content">
            <div class="footer-heading">Legal</div>
            <div class="fade-in-move-on-scroll">
                <a href="/privacy" class="footer-link w-inline-block">
                    <div>Privacy</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/contact" class="footer-link w-inline-block">
                    <div>Contact</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/home" aria-current="page" class="footer-link w-inline-block w--current">
                    <div>Legal</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="footer-grid-content second">
                <div class="footer-heading">Help</div>
                <div class="fade-in-move-on-scroll">
                    <a href="https://wedoflow.com/templates" target="_blank" class="footer-link w-inline-block">
                        <div>More Templates</div>
                        <div class="link-block-underline"></div>
                    </a>
                </div>
                <div class="fade-in-move-on-scroll">
                    <a href="https://wedoflow.com/contact?ref=template-designer-support" target="_blank" class="footer-link w-inline-block">
                        <div>Designer Support</div>
                        <div class="link-block-underline"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-grid-content">
            <div class="footer-heading">Utility</div>
            <div class="fade-in-move-on-scroll">
                <a href="/template/style-guide" class="footer-link w-inline-block">
                    <div>Style Guide</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/template/licensing" class="footer-link w-inline-block">
                    <div>Licencing</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/template/change-log" class="footer-link w-inline-block">
                    <div>Change Log</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
            <div class="fade-in-move-on-scroll">
                <a href="/template/instructions" class="footer-link w-inline-block">
                    <div>Instructions</div>
                    <div class="link-block-underline"></div>
                </a>
            </div>
        </div>
    </div>
    <div data-w-id="eb050d0c-cd20-6fbc-5d31-0eaf0a144c87" class="made-by-section">
        <div class="copyright-text">© 2024 - Made with 💙 by <a href="https://azwedo.com?ref=template" target="_blank" class="copyright-link">Azwedo</a>&amp; <a href="https://wedoflow.com/templates?ref=template" target="_blank" class="copyright-link">Wedoflow</a></div>
        <div class="copyright-text">Powered by <a href="https://webflow.com?ref=wedoflow.com" target="_blank" class="copyright-link">Webflow</a></div>
    </div>
    </div>
    <div data-w-id="c636e2a3-84c6-4db0-7cd6-78c44c91c3e2" class="footer-grid-wrapper">
        <div class="footer-grid-shapes"></div>
        <div class="home-grid-side-gradient"></div>
    </div>
    </div>
    <div data-w-id="26e88438-0e4d-2b81-76a9-59a41b8d0eb1" style="-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
        class="buy-template-panel">
        <a href="https://webflow.com/templates/html/qatar-event-website-template" target="_blank" class="buy-template-link w-inline-block">
            <div class="buy-this-template-button-container">
                <div class="buy-this-template-content">
                    <div class="buy-this-template-text">Buy this</div>
                    <div class="buy-webflow-template-content">
                        <div class="webflow-icon"></div>
                        <div class="buy-this-template-text">template for <strong>$79 USD</strong></div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    </div>


 
    
 
);
};


export default Hero;
