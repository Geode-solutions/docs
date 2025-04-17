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

# struct SurfaceSkinSplitsOrder


## Members

```cpp
public SurfaceSkin & skin

```

```cpp
public const SurfaceSplitsOrder & splits_order

```



## Functions

### SurfaceSkinSplitsOrder

```cpp
public void SurfaceSkinSplitsOrder(SurfaceSkin & skin_in, const SurfaceSplitsOrder & splits_order_in)
```




