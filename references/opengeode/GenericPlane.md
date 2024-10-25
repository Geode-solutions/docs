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

# class GenericPlane


# class GenericPlane


## Functions

### GenericPlane

```cpp
public void GenericPlane<PointType>(const Vector3D & normal, PointType origin)
```


### GenericPlane

```cpp
public void GenericPlane<PointType>(const Triangle3D & triangle)
```


### GenericPlane

```cpp
public void GenericPlane<PointType>(const GenericPlane<PointType> & other)
```


### operator=

```cpp
public GenericPlane<PointType> & operator=(const GenericPlane<PointType> & other)
```


### GenericPlane

```cpp
public void GenericPlane<PointType>(GenericPlane<PointType> && other)
```


### operator=

```cpp
public GenericPlane<PointType> & operator=(GenericPlane<PointType> && other)
```


### normal

```cpp
public const Vector3D & normal()
```


### origin

```cpp
public const Point3D & origin()
```


### plane_constant

```cpp
public double plane_constant()
```




# class GenericPlane


