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

# class PhysicalProblem


 Simulator-independent description of a flow simulation on a model: fluid, flow process, rock materials, initial state, well source terms, time schedule, outputs and simulator-specific options. Model regions are referenced by component uuid. Spatially varying data (porosity, permeability, boundary conditions) stay in the model PhysicalProperties.



```cpp
Inherits from Identifier
```



## Functions

### PhysicalProblem

```cpp
public void PhysicalProblem(const PhysicalProblem & )
```


### operator=

```cpp
public PhysicalProblem & operator=(const PhysicalProblem & )
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### PhysicalProblem

```cpp
public void PhysicalProblem()
```


### PhysicalProblem

```cpp
public void PhysicalProblem(PhysicalProblem && other)
```


### operator=

```cpp
public PhysicalProblem & operator=(PhysicalProblem && other)
```


### ~PhysicalProblem

```cpp
public void ~PhysicalProblem()
```


### clone

```cpp
public PhysicalProblem clone()
```


 Polymorphic parts (flow, fluid, laws, initial conditions) are shared with the clone

### model_id

```cpp
public const std::optional<uuid> & model_id()
```


 Id of the model this problem was built for, if recorded

### has_flow

```cpp
public bool has_flow()
```


### flow

```cpp
public const FlowModel & flow()
```


### fluid

```cpp
public const FluidModel & fluid()
```


### thermal

```cpp
public const std::optional<ThermalParameters> & thermal()
```


### materials

```cpp
public absl::Span<const Material> materials()
```


### nb_initial_conditions

```cpp
public index_t nb_initial_conditions()
```


### initial_condition

```cpp
public const InitialCondition & initial_condition(index_t initial_condition_id)
```


### source_terms

```cpp
public absl::Span<const SourceTerm> source_terms()
```


### schedule

```cpp
public const Schedule & schedule()
```


### output

```cpp
public const OutputSettings & output()
```


### gravity

```cpp
public const Vector3D & gravity()
```


 m/s2, default is (0, 0, -9.81)

### solver_options

```cpp
public const SolverOptions & solver_options()
```


### set_model_id

```cpp
public void set_model_id(const uuid & model_id, PhysicalProblemBuilderKey )
```


### set_flow

```cpp
public void set_flow(std::shared_ptr<FlowModel> flow, PhysicalProblemBuilderKey )
```


### set_thermal

```cpp
public void set_thermal(const ThermalParameters & thermal, PhysicalProblemBuilderKey )
```


### add_material

```cpp
public index_t add_material(Material material, PhysicalProblemBuilderKey )
```


### set_material

```cpp
public void set_material(index_t material_id, Material material, PhysicalProblemBuilderKey )
```


### remove_material

```cpp
public void remove_material(index_t material_id, PhysicalProblemBuilderKey )
```


### add_initial_condition

```cpp
public index_t add_initial_condition(std::shared_ptr<InitialCondition> initial_condition, PhysicalProblemBuilderKey )
```


### remove_initial_condition

```cpp
public void remove_initial_condition(index_t initial_condition_id, PhysicalProblemBuilderKey )
```


### add_source_term

```cpp
public index_t add_source_term(SourceTerm source_term, PhysicalProblemBuilderKey )
```


### remove_source_term

```cpp
public void remove_source_term(index_t source_term_id, PhysicalProblemBuilderKey )
```


### set_schedule

```cpp
public void set_schedule(const Schedule & schedule, PhysicalProblemBuilderKey )
```


### set_output

```cpp
public void set_output(OutputSettings output, PhysicalProblemBuilderKey )
```


### set_gravity

```cpp
public void set_gravity(const Vector3D & gravity, PhysicalProblemBuilderKey )
```


### set_solver_option

```cpp
public void set_solver_option(std::string_view simulator, std::string_view key, std::string_view value, PhysicalProblemBuilderKey )
```


### copy

```cpp
public void copy(const PhysicalProblem & other, PhysicalProblemBuilderKey )
```




