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

# class GenericCircle


# class GenericCircle


## Functions

### GenericCircle

```cpp
public void GenericCircle<PlaneType>(PlaneType plane, double radius)
```


### GenericCircle

```cpp
public void GenericCircle<PlaneType>(const GenericCircle<PlaneType> & other)
```


### operator=

```cpp
public GenericCircle<PlaneType> & operator=(const GenericCircle<PlaneType> & other)
```


### GenericCircle

```cpp
public void GenericCircle<PlaneType>(GenericCircle<PlaneType> && other)
```


### operator=

```cpp
public GenericCircle<PlaneType> & operator=(GenericCircle<PlaneType> && other)
```


### plane

```cpp
public const PlaneType & plane()
```


### radius

```cpp
public double radius()
```


### bounding_box

```cpp
public BoundingBox bounding_box()
```




# class GenericCircle


