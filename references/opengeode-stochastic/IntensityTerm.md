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

# class IntensityTerm


```cpp
Inherits from SingleObjectTerm<OwnerSegment2D, std::function<double (const OwnerSegment2D &, const SpatialDomain<OwnerSegment2D::dim> &)> >
```



## Functions

### IntensityTerm

```cpp
public void IntensityTerm(basic_string_view name, double lambda, vector targeted_set_ids, double caracteristic_length, const SpatialDomain<OwnerSegment2D::dim> & domain)
```




