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

# class OwnerRay


```cpp
Inherits from GenericLine<Point<3U>, 3U>
```



# class OwnerRay


```cpp
Inherits from GenericLine<Point<1U>, 1U>
```



# class OwnerRay


```cpp
Inherits from GenericLine<Point<2U>, 2U>
```



# class OwnerRay


```cpp
Inherits from GenericLine<Point<dimension>, dimension>
```



## Functions

### OwnerRay

```cpp
public void OwnerRay<>(const Vector<dimension> & direction, Point<dimension> origin)
```


### OwnerRay

```cpp
public void OwnerRay<>(const Segment<dimension> & segment)
```


### OwnerRay

```cpp
public void OwnerRay<>(const OwnerRay<dimension> & other)
```


### operator=

```cpp
public OwnerRay<dimension> & operator=(const OwnerRay<dimension> & other)
```


### OwnerRay

```cpp
public void OwnerRay<>(OwnerRay<dimension> && other)
```


### operator=

```cpp
public OwnerRay<dimension> & operator=(OwnerRay<dimension> && other)
```




