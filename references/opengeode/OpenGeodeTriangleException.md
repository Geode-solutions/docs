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

# class OpenGeodeTriangleException


```cpp
Inherits from OpenGeodeException
```



## Members

```cpp
public OwnerTriangle<dimension> triangle

```



## Functions

### OpenGeodeTriangleException

```cpp
public void OpenGeodeTriangleException<dimension>(Triangle<dimension> triangle_in, const Args &... message)
```




