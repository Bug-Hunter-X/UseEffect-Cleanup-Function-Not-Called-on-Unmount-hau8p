# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a scenario where the cleanup function in `useEffect` is not called when the component unmounts.  This is an uncommon error that can occur due to specific component lifecycle interactions or premature component unmounting before the cleanup function has a chance to execute. The issue and a solution are provided for educational purposes.

## Problem

The `useEffect` hook with an empty dependency array `[]` is designed to run only once after the initial render. The cleanup function, which is the return value from `useEffect`, should run before the component is unmounted.  However, in some situations (e.g., rapid re-renders, unexpected component removal), this cleanup might not execute, leading to potential memory leaks or other unintended consequences. 

## Solution

A more robust approach involves using a dependency array to ensure proper cleanup handling and avoid potential timing conflicts.