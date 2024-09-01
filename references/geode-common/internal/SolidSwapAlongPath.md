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

# class SolidSwapAlongPath


## Functions

### SolidSwapAlongPath

```cpp
public void SolidSwapAlongPath(const SolidSwapAlongPath & )
```


### operator=

```cpp
public SolidSwapAlongPath & operator=(const SolidSwapAlongPath & )
```


### SolidSwapAlongPath

```cpp
public void SolidSwapAlongPath(SolidSwapAlongPath && )
```


### operator=

```cpp
public SolidSwapAlongPath & operator=(SolidSwapAlongPath && )
```


### SolidSwapAlongPath

```cpp
public void SolidSwapAlongPath(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, index_t begin, index_t end)
```


### ~SolidSwapAlongPath

```cpp
public void ~SolidSwapAlongPath()
```


### swap

```cpp
public SolidSwapPathInfo swap()
```




