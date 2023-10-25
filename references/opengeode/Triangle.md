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

# class Triangle

# class Triangle

# class Triangle


```cpp
Inherits from GenericTriangle<RefPoint<dimension>, dimension>
```



## Functions

### Triangle

```cpp
public void Triangle<dimension>(const Point<dimension> & point0, const Point<dimension> & point1, const Point<dimension> & point2)
```


### Triangle

```cpp
public void Triangle<dimension>(const Triangle<dimension> & other)
```


### Triangle

```cpp
public void Triangle<dimension>(const OwnerTriangle<dimension> & other)
```


### operator=

```cpp
public Triangle<dimension> & operator=(const Triangle<dimension> & other)
```


### Triangle

```cpp
public void Triangle<dimension>(Triangle<dimension> && other)
```


### operator=

```cpp
public Triangle<dimension> & operator=(Triangle<dimension> && other)
```




