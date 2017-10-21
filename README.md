# COMPLETE ME

![Sample UI](complete-me-screenshot.gif)

## Synopsis

Everybody uses auto complete.You can love it or you can hate it but ultimately you’re going to use it. Sometimes it’s helpful and sometimes it’s just annoying. In this project you are going to be building a low level version of an auto complete system in javascript.

A trie is a data structure in computer science. The word trie is derived from the word retrieval (as in re-trie-val).

Now there are many types of tries and one you will hear a lot about is the binary search trie. It’s like a linked list the only difference is that each node has a left and right node attached to it.

The benefits of something like a trie is that it makes dealing with large sets of data easier to handle.

I’m not the most organized human being as you’ve noticed. My wife who is pretty amazing is. She has files stored in folders, she has spread sheets, and she knows where everything typically is.

I’ve always struggled with that. Organizing my things in way that makes grabbing something or finding something easily has kind of been difficult for me.

Sometimes what I tend to do is put all the things in one place. Just because everything that is important is found in a single place doesn’t mean it’s optimal. If me and my wife were to have a race on retrieve a specific form, or calendar date I’m coming in last place.

We are currently doing things that are similar inside of our programs. We find something that is important and we store it inside of a data structure. In our case that data-structure is an array. In some cases it also can be saved inside of an object. Now as our data set grows it can become more and more difficult to manage that information.

Array’s are great but what you will find is that they can get kind of slow because you are only going in a straight line. You can do somethings to optimize the speed of traversing through the array but what you will notice is that because the data set is not organized optimally it can lead to some problems.

You are essentially sorting through information that can typically be ruled out. It feels like keeping all your important documents in one folder instead of sorting it out into a parts or pieces.

## Built With
* JQuery
* CSS
* HTML

## Contributors

Jason Lucas

## Original Assignment - Turing MOD2

Build a game that is playable in the browser.

#### Specifications

The first thing your trie should be able to do is take in a word. It should also keep a count of how many words have been inserted.

Once the words are placed into the trie it should be able to offer some suggestions based on a word prefix.

Our Trie won’t be very useful without a good dataset to populate it. Our computers ship with a special file containing a list of standard dictionary words. It lives at /usr/share/dict/words

Using the unix utility wc (word count), we can see that the file contains 235886 words:

The common gripe about autocomplete systems is that they give us suggestions that are technically valid but not at all what we wanted.

A solution to this problem is to “train” the completion dictionary over time based on the user’s actual selections. So, if a user consistently selects “pizza” in response to completions for “pizz”, it probably makes sense to recommend that as their first suggestion.

Your library should support a select method which takes a suggested word. You will need to record this selection in your trie and use it to influence future suggestions.
