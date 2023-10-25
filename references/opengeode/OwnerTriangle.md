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

# class OwnerTriangle


```cpp
Inherits from GenericTriangle<Point<dimension>, dimension>
```



## Functions

### OwnerTriangle

```cpp
public void OwnerTriangle<>(Point<dimension> point0, Point<dimension> point1, Point<dimension> point2)
```


### OwnerTriangle

```cpp
public void OwnerTriangle<>(const OwnerTriangle<dimension> & other)
```


### operator=

```cpp
public OwnerTriangle<dimension> & operator=(const OwnerTriangle<dimension> & other)
```


### OwnerTriangle

```cpp
public void OwnerTriangle<>(OwnerTriangle<dimension> && other)
```


### operator=

```cpp
public OwnerTriangle<dimension> & operator=(OwnerTriangle<dimension> && other)
```




# class OwnerTriangle

# class OwnerTriangle

