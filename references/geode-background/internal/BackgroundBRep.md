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

# class BackgroundBRep


## Functions

### BackgroundBRep

```cpp
public void BackgroundBRep(BRep & brep)
```


### ~BackgroundBRep

```cpp
public void ~BackgroundBRep()
```


### brep

```cpp
public const BRep & brep()
```


### background_solid

```cpp
public const BackgroundSolid & background_solid(const Block3D & block)
```


### clone

```cpp
public std::tuple<BRep, std::unique_ptr<BackgroundBRep> > clone()
```


### clone_brep

```cpp
public BRep clone_brep()
```


### background_solid

```cpp
public BackgroundSolid & background_solid(const Block3D & block, BackgroundBRepBuilderKey key)
```




