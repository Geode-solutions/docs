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

# class HorizonRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~HorizonRangeBase

```cpp
public void ~HorizonRangeBase()
```


### operator!=

```cpp
public bool operator!=(const HorizonRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### HorizonRangeBase

```cpp
protected void HorizonRangeBase(const Horizons<> & horizons)
```


### HorizonRangeBase

```cpp
protected void HorizonRangeBase(HorizonRangeBase && other)
```


### HorizonRangeBase

```cpp
protected void HorizonRangeBase(const HorizonRangeBase & other)
```




