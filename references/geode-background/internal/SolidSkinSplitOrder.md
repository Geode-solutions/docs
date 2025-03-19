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

# struct SolidSkinSplitOrder


## Members

```cpp
public SolidSkin solid_skin

```

```cpp
public const SplitsOrder & splits_order

```



## Functions

### SolidSkinSplitOrder

```cpp
public void SolidSkinSplitOrder(SolidSkin solid_skin_in, const SplitsOrder & splits_order_in)
```




