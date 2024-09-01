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

# class SolidBorderPathFinder


 The objective of this class is to find paths on border of a TetrahedralSolid3D. As an example, this class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



## Functions

### SolidBorderPathFinder

```cpp
public void SolidBorderPathFinder(const SolidBorderPathFinder & )
```


### operator=

```cpp
public SolidBorderPathFinder & operator=(const SolidBorderPathFinder & )
```


### SolidBorderPathFinder

```cpp
public void SolidBorderPathFinder(SolidBorderPathFinder && )
```


### operator=

```cpp
public SolidBorderPathFinder & operator=(SolidBorderPathFinder && )
```


### SolidBorderPathFinder

```cpp
public void SolidBorderPathFinder(const TetrahedralSolid3D & solid, index_t begin, index_t end, const Triangle3D & triangle)
```


 Find a path between two border vertices along a plane and an extension given by a Triangle3D.

**begin** [in] Index of the cut starting vertex

**end** [in] Index of the cut ending vertex could be identical to begin.

### ~SolidBorderPathFinder

```cpp
public void ~SolidBorderPathFinder()
```


### find_paths

```cpp
public vector find_paths()
```




