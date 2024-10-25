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

# class OwnerPlane


```cpp
Inherits from GenericPlane<Point3D>
```



## Functions

### OwnerPlane

```cpp
public void OwnerPlane(const Vector3D & normal, Point origin)
```


### OwnerPlane

```cpp
public void OwnerPlane(const Triangle3D & triangle)
```


### OwnerPlane

```cpp
public void OwnerPlane(const OwnerPlane & other)
```


### operator=

```cpp
public OwnerPlane & operator=(const OwnerPlane & other)
```


### OwnerPlane

```cpp
public void OwnerPlane(OwnerPlane && other)
```


### operator=

```cpp
public OwnerPlane & operator=(OwnerPlane && other)
```




