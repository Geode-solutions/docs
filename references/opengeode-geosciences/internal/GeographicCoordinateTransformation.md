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

# class GeographicCoordinateTransformation


 Coordinate transformation between two geographic coordinate systems. Construction throws if the transformation cannot be created (e.g. unknown authority code).



## Functions

### GeographicCoordinateTransformation

```cpp
public void GeographicCoordinateTransformation(const GeographicCoordinateSystemInfo & from, const GeographicCoordinateSystemInfo & to)
```


### GeographicCoordinateTransformation

```cpp
public void GeographicCoordinateTransformation(GeographicCoordinateTransformation && other)
```


### ~GeographicCoordinateTransformation

```cpp
public void ~GeographicCoordinateTransformation()
```


### transform

```cpp
public std::vector<Point<dimension>> transform(const GeographicCoordinateSystem<dimension> & from)
```


 Return the transformed coordinates of all the points of the given coordinate system.

**exception**if a point cannot be transformed.



