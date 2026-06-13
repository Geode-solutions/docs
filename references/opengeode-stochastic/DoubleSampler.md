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

# struct DoubleSampler


## Records

DistributionDescription



## Functions

### create_distribution

```cpp
public static Distribution create_distribution(const DistributionDescription & desc)
```


### create_rad_angle_distribution_from_degree

```cpp
public static Distribution create_rad_angle_distribution_from_degree(const DistributionDescription & angle_desc_deg)
```


### sample

```cpp
public static double sample(RandomEngine & engine, const Distribution & dist)
```




