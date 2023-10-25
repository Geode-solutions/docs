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

# class GenericSphere


# class GenericSphere


# class GenericSphere


## Functions

### GenericSphere

```cpp
public void GenericSphere<PointType, dimension>(PointType origin, double radius)
```


### GenericSphere

```cpp
public void GenericSphere<PointType, dimension>(const GenericSphere<PointType, dimension> & other)
```


### operator=

```cpp
public GenericSphere<PointType, dimension> & operator=(const GenericSphere<PointType, dimension> & other)
```


### GenericSphere

```cpp
public void GenericSphere<PointType, dimension>(GenericSphere<PointType, dimension> && other)
```


### operator=

```cpp
public GenericSphere<PointType, dimension> & operator=(GenericSphere<PointType, dimension> && other)
```


### origin

```cpp
public const Point<dimension> & origin()
```


### radius

```cpp
public double radius()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```




# class GenericSphere


# class GenericSphere


