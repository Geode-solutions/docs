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

# class HorizonOrderedRange


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### HorizonOrderedRange

```cpp
public void HorizonOrderedRange(const HorizonsStack<> & horizons_stack)
```


### HorizonOrderedRange

```cpp
public void HorizonOrderedRange(HorizonOrderedRange && other)
```


### HorizonOrderedRange

```cpp
public void HorizonOrderedRange(const HorizonOrderedRange & other)
```


### ~HorizonOrderedRange

```cpp
public void ~HorizonOrderedRange()
```


### operator!=

```cpp
public bool operator!=(const HorizonOrderedRange & )
```


### operator++

```cpp
public void operator++()
```


### begin

```cpp
public const HorizonOrderedRange & begin()
```


### end

```cpp
public const HorizonOrderedRange & end()
```


### operator*

```cpp
public const Horizon<dimension> & operator*()
```




