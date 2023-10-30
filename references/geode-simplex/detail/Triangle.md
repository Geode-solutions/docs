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

# struct Triangle


## Members

```cpp
public OwnerTriangle3D triangle

```



## Functions

### Triangle

```cpp
public void Triangle(const Point3D & p0, const Point3D & p1, const Point3D & p2)
```




