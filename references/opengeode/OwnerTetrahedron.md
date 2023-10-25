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

# class OwnerTetrahedron


```cpp
Inherits from GenericTetrahedron<Point3D>
```



## Functions

### OwnerTetrahedron

```cpp
public void OwnerTetrahedron(Point3D point0, Point3D point1, Point3D point2, Point3D point3)
```


### OwnerTetrahedron

```cpp
public void OwnerTetrahedron(const OwnerTetrahedron & other)
```


### operator=

```cpp
public OwnerTetrahedron & operator=(const OwnerTetrahedron & other)
```


### OwnerTetrahedron

```cpp
public void OwnerTetrahedron(OwnerTetrahedron && other)
```


### operator=

```cpp
public OwnerTetrahedron & operator=(OwnerTetrahedron && other)
```




