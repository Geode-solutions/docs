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

# class OwnerInfiniteLine


```cpp
Inherits from GenericLine<Point<2U>, 2U>
```



# class OwnerInfiniteLine


```cpp
Inherits from GenericLine<Point<3U>, 3U>
```



# class OwnerInfiniteLine


```cpp
Inherits from GenericLine<Point<1U>, 1U>
```



# class OwnerInfiniteLine


```cpp
Inherits from GenericLine<Point<dimension>, dimension>
```



## Functions

### OwnerInfiniteLine

```cpp
public void OwnerInfiniteLine<>(const Vector<dimension> & direction, Point<dimension> origin)
```


### OwnerInfiniteLine

```cpp
public void OwnerInfiniteLine<>(const Segment<dimension> & segment)
```


### OwnerInfiniteLine

```cpp
public void OwnerInfiniteLine<>(const OwnerInfiniteLine<dimension> & other)
```


### operator=

```cpp
public OwnerInfiniteLine<dimension> & operator=(const OwnerInfiniteLine<dimension> & other)
```


### OwnerInfiniteLine

```cpp
public void OwnerInfiniteLine<>(OwnerInfiniteLine<dimension> && other)
```


### operator=

```cpp
public OwnerInfiniteLine<dimension> & operator=(OwnerInfiniteLine<dimension> && other)
```




