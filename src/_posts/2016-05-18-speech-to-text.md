---
layout: post
title:  "Bol to Text"
date:   2016-05-18
tags: [site, blog, tabla]
---

This week I'm attempting to make it easier to translate the wonderful language of tabla. The language and it's compostitions is passed down through oral tradition and until very recently, memory was the only way compositions were stored.

Now, there are many people who have transcribed various pieces simply by ear.

I wan't to use the PocketSphinx library [here](http://syl22-00.github.io/pocketsphinx.js/) to try and interpret tabla speech and convert it to text. This should hopefully make it easier to dictate and transcribe tabla compositions.

The audio demo [here](https://syl22-00.github.io/pocketsphinx.js/live-demo.html) shows how the library could work. I would neet to add my custom tabla grammar which the library can then use to match the audio to specific words or bols.

These words would have to be added to the recognizer using the phenome set given [here](http://www.speech.cs.cmu.edu/cgi-bin/cmudict)

The project will be in progress on a [GitHub](https://github.com/jasmeeto/bol-to-text) repo if you would like to check it out.