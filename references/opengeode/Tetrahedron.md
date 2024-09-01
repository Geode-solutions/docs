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

# class Tetrahedron


```cpp
Inherits from GenericTetrahedron<RefPoint3D>
```



## Functions

### Tetrahedron

```cpp
public void Tetrahedron(const Point3D & point0, const Point3D & point1, const Point3D & point2, const Point3D & point3)
```


### Tetrahedron

```cpp
public void Tetrahedron(const Tetrahedron & other)
```


### Tetrahedron

```cpp
public void Tetrahedron(const OwnerTetrahedron & other)
```


### operator=

```cpp
public Tetrahedron & operator=(const Tetrahedron & other)
```


### Tetrahedron

```cpp
public void Tetrahedron(Tetrahedron && other)
```


### operator=

```cpp
public Tetrahedron & operator=(Tetrahedron && other)
```




