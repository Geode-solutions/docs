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

# class InfiniteLine


```cpp
Inherits from GenericLine<RefPoint<1U>, 1U>
```



# class InfiniteLine


```cpp
Inherits from GenericLine<RefPoint<2U>, 2U>
```



# class InfiniteLine


```cpp
Inherits from GenericLine<RefPoint<dimension>, dimension>
```



## Functions

### InfiniteLine

```cpp
public void InfiniteLine<>(const Vector<dimension> & direction, const Point<dimension> & origin)
```


### InfiniteLine

```cpp
public void InfiniteLine<>(const Segment<dimension> & segment)
```


### InfiniteLine

```cpp
public void InfiniteLine<>(const InfiniteLine<dimension> & other)
```


### InfiniteLine

```cpp
public void InfiniteLine<>(const OwnerInfiniteLine<dimension> & other)
```


### operator=

```cpp
public InfiniteLine<dimension> & operator=(const InfiniteLine<dimension> & other)
```


### InfiniteLine

```cpp
public void InfiniteLine<>(InfiniteLine<dimension> && other)
```


### operator=

```cpp
public InfiniteLine<dimension> & operator=(InfiniteLine<dimension> && other)
```




# class InfiniteLine


```cpp
Inherits from GenericLine<RefPoint<3U>, 3U>
```



