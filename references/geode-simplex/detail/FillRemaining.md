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

# class FillRemaining

# class FillRemaining

# class FillRemaining


## Records

Impl



## Functions

### FillRemaining

```cpp
public void FillRemaining<dimension>(RemainingSurface<dimension> & remaining)
```


### ~FillRemaining

```cpp
public void ~FillRemaining<dimension>()
```


### fill

```cpp
public FixedArray fill()
```




