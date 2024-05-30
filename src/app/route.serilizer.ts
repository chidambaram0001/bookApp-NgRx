import { Params, RouterStateSnapshot } from "@angular/router";
import { BaseRouterStoreState, RouterStateSerializer } from "@ngrx/router-store";
export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
  }
export class routeSerializer implements RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route:any = routerState.root;
        while(route.firstChild){
            route = route.firstChild;
        }
        const { url, root: {queryParams} } = routerState;
        const { params } = route;
        return {url, params, queryParams}
    }
}
