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

# class KernelPolytope


 Convex polytope in double precision given by its polygonal faces, used to approximate the kernel of a star-shaped region. Only used to propose candidate points that are then validated exactly.



## Functions

### KernelPolytope

```cpp
public void KernelPolytope(const Vec & min, const Vec & max)
```


### empty

```cpp
public bool empty()
```


### clip

```cpp
public void clip(const Vec & normal, double offset)
```


 Keep the part where dot( normal, x ) >= offset.

### vertices

```cpp
public std::vector<Vec> vertices()
```




