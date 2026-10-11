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

# class FractureProcessBuilder


## Functions

### set_domain

```cpp
public void set_domain(const SpatialDomainConfig<2> & domain_cfg)
```


### add_fracture_set

```cpp
public ObjectSetDefinition<Fracture> & add_fracture_set(std::string_view name, double p20, std::optional<double> expected_count)
```


 Fracture set with a density term (number of fractures per unit area). Observed fractures can be added to the returned definition fixed_objects.

### add_intensity

```cpp
public void add_intensity(std::string_view set_name, double p21, std::optional<double> expected_total_length)
```


 Intensity term (fracture length per unit area) on a fracture set.

### add_minimal_spacing

```cpp
public void add_minimal_spacing(std::string_view set_name, double minimal_spacing, std::optional<double> expected_count)
```


 Hard-core constraint: fractures of the set cannot be closer than the given distance (0 forbids intersections).

### add_x_node_interaction

```cpp
public void add_x_node_interaction(const std::vector<std::string> & interacting_set_names, double beta, std::optional<double> expected_count)
```


 Interaction between intersecting fractures of different sets (beta in [0, 1]: 0 forbids X-nodes, 1 has no effect).

### build_simulation_context

```cpp
public FractureSimulationContext build_simulation_context()
```


### expected_statistics

```cpp
public const std::vector<TargetStatisticConfig> & expected_statistics()
```




