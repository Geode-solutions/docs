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

# class Plane


```cpp
Inherits from GenericPlane<RefPoint3D>
```



## Functions

### Plane

```cpp
public void Plane(const Vector3D & normal, const Point3D & origin)
```


### Plane

```cpp
public void Plane(const Triangle3D & triangle)
```


### Plane

```cpp
public void Plane(const Plane & other)
```


### Plane

```cpp
public void Plane(const OwnerPlane & other)
```


### operator=

```cpp
public Plane & operator=(const Plane & other)
```


### Plane

```cpp
public void Plane(Plane && other)
```


### operator=

```cpp
public Plane & operator=(Plane && other)
```




