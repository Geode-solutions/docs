<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class LineRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~LineRangeBase

```cpp
public void ~LineRangeBase()
```


### operator!=

```cpp
public bool operator!=(const LineRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### LineRangeBase

```cpp
protected void LineRangeBase(const Lines<> & lines)
```


### LineRangeBase

```cpp
protected void LineRangeBase(LineRangeBase && other)
```


### LineRangeBase

```cpp
protected void LineRangeBase(const LineRangeBase & other)
```




