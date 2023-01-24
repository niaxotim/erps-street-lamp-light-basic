### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Street Lamp - Basic

## Introduction
### Introduction Step @unplugged
In this challenge, we are going to add an important part to our street furniture; street lamps!   
  
The code in this tutorial will get us coding some simple functions on our lamp.  
  
We'll use the buttons on the micro:bit to control our lamp.  
  
![Radio traffic lights](https://raw.githubusercontent.com/niaxotim/erps-street-lamp-light-basic/master/assets/streetlamp.png)


## Turn the lamp on!
### Step 1
Let's begin by setting up our input, using an ``||input:on button A||`` block from input.  


#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
})
```

### Step 2
Now let's drag a ``||Kitronik_LAMPbit.Turn Lamp Light On||`` block in to our ``||input:on button A||`` block.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
})
```

## Turn the lamp off!
### Step 3
OK, so now we can turn our lamp on, but what about turning it off?!  

Let's get another input, so that we can use Button 'B' to switch the light off.  Drag a ``||input:on button B||`` block on to your editor.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.B, function () {
})
```

### Step 4
Now let's drag a ``||Kitronik_LAMPbit.Turn Lamp Light Off||`` block in to our ``||input:on button B||`` block.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.B, function () {
    Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.Off)
})
```

### Step 5
Connect your second BBC micro:bit and click ``|Download|`` to transfer your code.  
Once programmed, press ``||input:button A||`` to check that your lamp comes on, and that pressing ``||input:button B||`` turns it off!

### Street Lamp Basic Tutorial Complete @unplugged
Great work! You've got a working street lamp! What a great addition to your road!
Way to go! ;)
![Great job](https://raw.githubusercontent.com/niaxotim/erps-street-lamp-light-basic/master/assets/great_job.png)
