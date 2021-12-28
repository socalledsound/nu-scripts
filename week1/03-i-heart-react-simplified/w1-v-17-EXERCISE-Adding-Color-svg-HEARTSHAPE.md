[SC]
I HEART REACT - a few final tweaks
[VO]

[SC]
red hearts
[VO]

In the last video, we used Array.map to make a page full of heart messages, and that means that we're almost done here. But there's one more thing that I want to do before we move on...

[SC]
colorful hearts
[VO]
....which is to add some color to this page. It's a small thing and to make it happen we need to dive into the SVG of this SVG file, so honestly, if you'd rather not, I totally understand, you can skip this video and move on to the nucampsite.

But if you're even remotely interested in the way websites look, I think you'll agree that this page is better with color, and what's more, I think there's an interesting lesson here about the kinds we should keep in mind as we write and refactor our React components.

So...without further ado let's dive in there and make this happen.

[SC]

[VO]
And the first thing I want you to do is to make a new component, in it's own file. So maybe the first first thing to do is make that file. We'll

[SC]

    clicking on the file

[VO]

If you click on the red-heart.svg file in your file browser, you can see the code that makes up that red heart.

[SC]
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">

   <g fill='#FF0000'>
      <path d="M 297.29747,550.86823 
         C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 
         C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 
         C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 
         C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 
         C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 
         C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 
         C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 
         C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 
         L 320.95052,119.66445 L 330.81015,98.079942 
         C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 
         C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 
         C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 
         C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 
         C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z" />
      <g transform="translate(129.28571,-64.285714)" />
   </g>
</svg>

[VO]
If you haven't seen SVG before, it may seem a bit overwhelming but it's actually not all that mysterious, it's just a way to specify shapes using markup language,

[SC]
focus on path
[VO]
and the bulk of this code -- the part that's wrapped in a path tag -- is the heart shape. We aren't going to modify that part.

[SC]
focus on

    <g fill='#FF0000'>

[VO]
We're going to focus in on it's parent <g> tag -- just above the path tag. G tags are sort of like the div tags of svg code, and you can see that that g tag has a fill color, which is hard coded to red.

[SC]

     <g fill={col}>

[VO]
So what we're going to do is set that fill color with javascript.

[SC]

[VO]
But we're going to need to make our own custom component that uses this svg code to do that, so our first step is going to be to create a new file.

And that's pretty much all we have to do.

[SC]

[VO]
But

[SC]

[VO]

[SC]
[VO]
